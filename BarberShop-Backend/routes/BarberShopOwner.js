const Router = require("express");
const router = Router();

const Owner = require("../models/BarberShopOwner.js");
const BarberShop = require("../models/BarberShop.js");

router.post("/AddOwner", (req, res) => {
  const { name, email, password } = req.body;

  const owner = new Owner({
    name: name,
    email: email,
    password: password,
  });

  const savedOwner = owner.save();

  res.status(200).send({ message: "BarberShopOwner created with success" });
});

router.get("/allOwners", async (req, res) => {
  Owner.find()
    .then((All_Owners) => {
      res.send(All_Owners);
    })
    .catch((error) => console.log(error));
});

router.patch("/:OwnerId", (req, res) => {
  const id = req.params.OwnerId;
  const data = req.body;
  const updateOps = {};
  for (const key of Object.keys(data)) {
    updateOps[key] = data[key];
  }
  Owner.findByIdAndUpdate({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Owner updated",
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

router.delete("/:OwnerId", (req, res) => {
  Owner.findByIdAndDelete({ _id: req.params.OwnerId })
    .then((owner) => {
      console.log(owner);
      BarberShop.findOne({ barberOwner: owner._id })
        .exec()
        .then((barbershops) => {
          const owner_index = barbershops.barberOwner.indexOf(owner._id);
          if (owner_index !== -1) {
            barbershops.barberOwner.splice(owner_index, 1);
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
