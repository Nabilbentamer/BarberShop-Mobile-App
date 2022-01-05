const Router = require("express");
const router = Router();

const Appointement = require("../models/Appointement.js");

router.post("/bookAppointement", async (req, res) => {
  const { client_id, barber_id, services, date, startTime, endTime } = req.body;

  const appointement = new Appointement({
    client_id: client_id,
    barber_id: barber_id,
    services: services,
    date: date,
    startTime: startTime,
    endTime: endTime,
  });

  const savedAppointement = appointement.save(function (error) {
    if (error) {
      res.send(error);
    } else {
      res.send(savedAppointement);
    }
  });
});

router.get("/AllAppointements", async (req, res) => {
  Appointement.find()
    .then((all_appointements) => res.send(all_appointements))
    .catch((error) => console.log(error));
});

router.get("/AllAppointements/Barbers/:Barber_id", async (req, res) => {
  Appointement.find({ barber_id: req.params.Barber_id })
    .then((appointement) => {
      res.send(appointement);
    })
    .catch((error) => console.log(error));
});

router.get("/AllAppointements/Clients/:Client_id", async (req, res) => {
  Appointement.find({ client_id: req.params.Client_id })

    .then((appointement) => {
      res.send(appointement);
    })
    .catch((error) => console.log(error));
});

router.get("/AllAppointements/:Barber_id", async (req, res) => {
  Appointement.find({ barber_id: req.params.Barber_id })
    .then((appointement) => {
      res.send(appointement);
    })
    .catch((error) => console.log(error));
});

router.get("/Appointements/Slots/:Barber_id/:Client_id", async (req, res) => {
  const schedule = ["8.00", "9.00", "10.00", "11.00", "12.00"];
  Appointement.find({
    barber_id: req.params.Barber_id,
    client_id: req.params.Client_id,
  })
    .then((app) => res.send(app))
    .catch((error) => console.log(error));
  const free_Slots = [];
});
module.exports = router;
