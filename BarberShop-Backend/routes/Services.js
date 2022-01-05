const Router = require("express");
const router = Router();

const Barber = require("../models/barber.js");

router.get("/Services/:BarberId", async (req, res) => {
  Barber.findById(req.params.BarberId)
    .select("services")
    .exec()
    .then((doc) => res.send(doc))
    .catch((error) => res.send(error));
});

router.post("/services/:BarberId", async (req, res) => {
  const service = req.body;
  Barber.findByIdAndUpdate(req.params.BarberId)
    .then((barber) => {
      barber.services.push(service);
      barber.save();
      res.send({
        success: true,
        message: "service has been added successfully",
      });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
