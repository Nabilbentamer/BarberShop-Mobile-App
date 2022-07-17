const Router = require("express");
const router = Router();

const BarberShop = require("../models/BarberShop");
const barberOwner = require("../models/BarberShopOwner");

var axios = require("axios");
var api_key = "AIzaSyD8incqNwibU1dt1EP9H6a5HlY08Oj7n0g";

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

router.post("/implementMyDataBase", async (req, res) => {
  var config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=barbershop+in+Casablanca?fields=reviews?types=hair_cair&key=${api_key}`,

    headers: {},
  };

  await axios(config)
    .then(function (response) {
      const results = response.data.results;

      results.map((barbershop) => {
        // photo url
        const name = barbershop.name;
        const formatted_address = barbershop.formatted_address;
        const rating = barbershop.rating;
        const user_ratings_total = barbershop.user_rating_total;
        const location = barbershop.geometry.location;
        var photoURL = "";
        var reviews = "";
        /*
        const my_photo_reference = barbershop.photos[0].photo_reference;
        if (my_photo_reference) {
          console.log(my_photo_reference);
        } else {
          console.log("non");
        }*/

        /*get_photo(my_photo_reference, api_key).then(function (result) {
          if (result) {
            console.log(result);
          }
        });*/

        // barbershop_reviews:

        const barber_place_id = barbershop.place_id;
        const test = get_review_of_Barbers(barber_place_id);
        var output = test.then(function (result) {
          if (result) {
            const barberShop = new BarberShop({
              name: name,
              user_total_reviews: user_ratings_total,
              description: "desc",
              address: formatted_address,
              location: location,
              photoUrl: photoURL,
              average_review: rating,
              reviews: result,
              barberOwner: "61cd92290a15309848f2e9b3",
            });
            res.send(result);
            const savedBarberShop = barberShop.save(function (err) {
              if (err) {
                res.status(400).send(err);
              } else {
                res.status(200).send(savedBarberShop);
              }
            });
          }
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  /*****************************************************/
});

async function get_photo(photo_reference, api_key) {
  var myphoto_config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&sensor=false&key=${api_key}`,

    headers: {},
  };
  var photo = "nothing";
  await axios(myphoto_config)
    .then(function (response) {
      photo = response.data.result;
      return response.data.result;
      //console.log(response.data);
    })
    .catch(function (error) {
      console.log("not working");
    });
  return photo;
}

async function get_review_of_Barbers(barber_place_id) {
  var reviews = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${barber_place_id}&key=${api_key}`,

    headers: {},
  };
  var review = "nothing";
  await axios(reviews)
    .then(function (response) {
      review = response.data.result.reviews;
      return response.data.result.reviews; // reviews are an array
    })
    .catch(function (error) {
      console.log(error);
    });
  return review;
}
module.exports = router;
