const Router = require("express");
const router = Router();

const Barber = require("../models/barber.js");
const BarberShop = require("../models/BarberShop.js");

router.delete("/Barbers", (req, res) => {
  Barber.deleteMany()
    .then((Barbers) => {
      res.send(Barbers);
    })
    .catch((err) => console.log(err));
});

router.get("/allBarbers", async (req, res) => {
  Barber.find()
    //.populate("barberShop")
    .then((All_Barbers) => {
      res.send(All_Barbers);
    })
    .catch((error) => console.log(error));
});

router.post("/AddBarber", async (req, res) => {
  const { name, email, password, services, barberShop } = req.body;

  const barber = new Barber({
    name: name,
    email: email,
    password: password,
    barberShop: barberShop,
    services: services,
  });

  barber.save(function (errors, results) {
    if (errors) {
      res.status(400).send(errors);
    } else {
      BarberShop.findOne({ _id: barberShop })
        .exec()
        .then((barbershops) => {
          barbershops.barbers.push(barber._id);
          barbershops.save();
          res.send(barbershops);
        })
        .catch((error) => console.log(error));
    }
  });
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

router.delete("/:BarberId", (req, res) => {
  Barber.findByIdAndDelete({ _id: req.params.BarberId })
    .then((barber) => {
      console.log(barber);
      BarberShop.findOne({ _id: barber.barberShop })
        .exec()
        .then((barbershops) => {
          const barber_index = barbershops.barbers.indexOf(barber._id);
          if (barber_index !== -1) {
            barbershops.barbers.splice(barber_index, 1);
          }
          barbershops.save();
          res.send("deleted successfully");
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
