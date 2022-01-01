const Router = require("express");
const router = Router();

const BarberShop = require("../models/BarberShop");
const barberOwner = require("../models/BarberShopOwner");

router.get("/allBarberShop", (req, res, next) => {
  BarberShop.find()
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        mydocs: docs.map((doc) => {
          return {
            _id: doc._id,
            name: doc.name,
            barbers: doc.barbers,
            address: doc.address,
            barberOwner: doc.barberOwner,
          };
        }),
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/AddBarberShop", async (req, res) => {
  const { name, description, address, location, photoUrl, barberOwner } =
    req.body;

  const barberShop = new BarberShop({
    name: name,
    description: description,
    address: address,
    location: location,
    photoUrl: photoUrl,
    barberOwner: barberOwner,
  });
  const savedBarberShop = barberShop.save(function (err) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(savedBarberShop);
    }
  });
});

router.delete("/BarberShops", (req, res) => {
  BarberShop.deleteMany()
    .then((Barbershop) => {
      res.send(Barbershop);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
