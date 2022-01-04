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
module.exports = router;
