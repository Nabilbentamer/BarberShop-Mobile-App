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

router.get("/allBarbers/:barberShopId", async (req, res) => {
  Barber.find({ barberShop: req.params.barberShopId }).exec(function (
    errors,
    barbers
  ) {
    res.send(barbers);
  });
});

router.patch("/:BarberId", (req, res, next) => {
  const id = req.params.BarberId;
  const data = req.body;
  const updateOps = {};
  for (const key of Object.keys(data)) {
    updateOps[key] = data[key];
  }
  Barber.findByIdAndUpdate({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Barber updated",
        reponse: updateOps,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/Barbers", (req, res) => {
  Barber.deleteMany()
    .then((Barbers) => {
      res.send(Barbers);
    })
    .catch((err) => console.log(err));
});

router.delete("/:BarberId", (req, res) => {
  Barber.findByIdAndDelete({ _id: req.params.BarberId })
    .then(res.send({ message: "Barber Deleted Succefully" }))
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
