const Router = require("express");
const router = Router();

const Barber = require("../models/barber.js");

router.post("/AddBarber", (req, res) => {
  const { name, email, password, services } = req.body;

  const barber = new Barber({
    name: name,
    email: email,
    password: password,
    services: services,
  });

  const savedBarber = barber.save();

  res.status(200).send({ message: "BarberShopBarber created with success" });
});

router.get("/allBarbers", async (req, res) => {
  Barber.find()
    .then((All_Barbers) => {
      res.send(All_Barbers);
    })
    .catch((error) => console.log(error));
});

router.delete("/Barbers", (req, res) => {
  Barber.deleteMany()
    .then((Barbers) => {
      res.send(Barbers);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
