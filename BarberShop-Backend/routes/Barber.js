const Router = require("express");
const router = Router();

const Barber = require("../models/barber.js");
const BarberShop = require("../models/BarberShop.js");

router.post("/AddBarber", async (req, res) => {
  const { name, email, password, services, barberShop } = req.body;

  const barber = new Barber({
    name: name,
    email: email,
    password: password,
    barberShop: barberShop,
    services: services,
  });

  const populatedBarberShop = new BarberShop({
    barbers: barber,
  });
  const savedBarber = await barber.save(function (error) {
    const ourBarbershop = BarberShop.findOne({ _id: barberShop }).exec(
      function (erro, barbershps) {
        barbershps.barbers.push(barber._id);
        barbershps.save();
        res.send(barbershps);
      }
    );
  });
});

router.get("/allBarbers", async (req, res) => {
  Barber.find()
    //.populate("barberShop")
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
