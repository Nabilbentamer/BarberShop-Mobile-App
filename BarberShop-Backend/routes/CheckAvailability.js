const Router = require("express");
const router = Router();

const Appointement = require("../models/Appointement.js");

router.get("/CheckAvailability/:Barber_id", async (req, res) => {
  const schedule = ["08.00", "09.00", "10.00", "11.00", "12.00"];
  var time_Slots = [];
  Appointement.find({
    barber_id: req.params.Barber_id,
  })
    .then((app) => {
      function findtime(item) {
        const time = { startTime: item.startTime, endTime: item.endTime };
        time_Slots.push(time);
      }
      app.map(findtime);

      time_Slots.map((item) => {
        if (schedule.indexOf(item.startTime) !== -1) {
          schedule.splice(schedule.indexOf(item.startTime), 1);
        }
      });

      res.send(schedule);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
