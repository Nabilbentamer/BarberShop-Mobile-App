function get_barbershops() {
  var axios = require("axios");
  var api_key = "AIzaSyD8incqNwibU1dt1EP9H6a5HlY08Oj7n0g";
  var config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=barbershop+in+Casablanca?fields=reviews?types=hair_cair&key=${api_key}`,

    headers: {},
  };

  axios(config)
    .then(function (response) {
      const results = response.data.results;
      //console.log(JSON.stringify(response.data.results));
      const barbershop = results[0];
      //results.map((barbershop) => {
      const barber_place_id = barbershop.place_id;
      var reviews = {
        method: "get",
        url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${barber_place_id}&key=${api_key}`,

        headers: {},
      };
      axios(reviews)
        .then(function (response) {
          console.log(response.data.result.reviews); // reviews are an array
        })
        .catch(function (error) {
          console.log(error);
        });
      //});
    })
    .catch(function (error) {
      console.log(error);
    });
}
