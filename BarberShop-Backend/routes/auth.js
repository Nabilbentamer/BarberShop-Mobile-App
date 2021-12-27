const { check, validationResult } = require("express-validator");

const Router = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const User = require("../models/Users");

const jwt = require("jsonwebtoken");
const config = require("../config/auth-config.js");

const generateToken = (user) => {
  return jwt.sign({ _id: user._id, email: user.email }, config.secret_key);
};

const validateRegister = [
  check("name").isLength({ min: 2 }).withMessage("Your Name is required"),
  check("email").isEmail().withMessage("Please provide a Valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least six characters"),
];

const loginValidation = [
  check("email").isEmail().withMessage("Please provide a valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least six characters"),
];

/********************************  Register EndPoint *********************************/

router.post("/register", validateRegister, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // if register validation is passed

  const { name, email, password } = req.body;
  // check if user already exist
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(400).send({ success: false, message: "Email already exist" });
  }

  const salt = await bcrypt.genSalt();
  const HashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: name,
    email: email,
    password: HashedPassword,
  });

  const savedUser = user.save();
  res.send({
    success: true,
    data: {
      id: savedUser._id,
      fullName: savedUser.name,
      email: savedUser.email,
    },
  });
});

/**************************************************************************************/

/********************************  Login EndPoint *********************************/

router.post("/login", loginValidation, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;

  // check if email exist
  const user = await User.findOne({ email: email });
  if (!user) {
    return res
      .status(404)
      .send({ success: false, message: "User is not registered" });
  }

  // check if password is correct
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res
      .status(404)
      .send({ success: false, message: "Invalid Email or Password" });
  }

  // create and assign a token

  const token = generateToken(user);
  res
    .header("auth-token", token)
    .send({ success: true, message: "Logged in successfully", token });
});
/**************************************************************************************/

module.exports = router;
