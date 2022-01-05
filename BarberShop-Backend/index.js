const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const AuthRoutes = require("./routes/auth.js");
const OwnerRoutes = require("./routes/BarberShopOwner.js");
const BarberRoutes = require("./routes/Barber.js");
const BarberShopRoutes = require("./routes/BarberShop.js");
const Services = require("./routes/Services.js");
const Appointements = require("./routes/Appointements.js");
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use("/api", AuthRoutes);
app.use("/api", OwnerRoutes);
app.use("/api", BarberRoutes);
app.use("/api", BarberShopRoutes);
app.use("/api", Services);
app.use("/api", Appointements);

mongoose
  .connect(
    "mongodb+srv://nabil_ben:BQ39CfGYv2uSjRvV@cluster0.tf7gg.mongodb.net/BarberShop?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(3000, () => console.log("Server is running"));
  })
  .catch((err) => console.log(err));
