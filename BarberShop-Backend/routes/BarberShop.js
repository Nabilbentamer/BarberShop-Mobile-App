const Router = require("express");
const BarberShop = require("../models/BarberShop.js");

const router = Router();

router.get("/allBarberShop", async (req, res) => {
  BarberShop.find()
    .then((All_Barbers) => {
      res.send(All_Barbers);
    })
    .catch((error) => console.log(error));
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
module.exports = router;
