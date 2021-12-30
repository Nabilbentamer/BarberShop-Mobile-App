const Router = require("express");
const router = Router();
const Owner = require("../models/BarberShopOwner.js");

router.post("/AddOwner", (req, res) => {
  const { name, email, password } = req.body;

  const owner = new Owner({
    name: name,
    email: email,
    password: password,
  });

  const savedOwner = owner.save();

  res.status(200).send({ message: "BarberShopOwner created with success" });
});

router.get("/allOwners", async (req, res) => {
  Owner.find()
    .then((All_Owners) => {
      res.send(All_Owners);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
