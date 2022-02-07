import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
var api_key = "AIzaSyD8incqNwibU1dt1EP9H6a5HlY08Oj7n0g";

export default () => {
  var [value, setValue] = useState([]);
  var [photo, setPhoto] = useState(
    "https://images.squarespace-cdn.com/content/v1/562eb1a8e4b0cd8682c40651/1575483224032-8QDRU79RHGBUB5UDHT5P/caeron+boyce.jpg?format=1000w"
  );

  let x = Test().then((response) => {
    setValue(response);
  });

  let get_reviews = (mybarbershop) => {
    if (typeof mybarbershop.reviews !== "undefined") {
      mybarbershop.reviews.map((x) => (
        <View>
          <Text>{x.author_name}</Text>
          <Text>{x.text}</Text>
        </View>
      ));
    } else {
      return (
        <View>
          <Text>testing</Text>
        </View>
      );
    }
  };
  return (
    <ScrollView>
      <StatusBar
        hidden={true}
        barStyle="dark-content"
        backgroundColor="white"
      ></StatusBar>
      {value.map((mybarbershop, index) => (
        <TouchableOpacity
          style={{ padding: 18, borderColor: "black", borderWidth: 0.5 }}
          key={index}
        >
          <Image
            source={{
              uri: mybarbershop.photos,
            }}
            style={{ width: 81, height: 80, borderRadius: 15 }}
          />
          <Text>{mybarbershop.name}</Text>
          {typeof mybarbershop.reviews !== "undefined" ? (
            mybarbershop.reviews.map((x) => (
              <View>
                <Image
                  source={{ uri: x.profile_photo_url }}
                  style={{ width: 60, height: 60 }}
                ></Image>
                <Text>{x.author_name}</Text>
                <Text>{x.text}</Text>
              </View>
            ))
          ) : (
            <Text>no</Text>
          )}
          {get_reviews(mybarbershop)}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

let get_photo = async (photo_reference) => {
  var api_key = "AIzaSyD8incqNwibU1dt1EP9H6a5HlY08Oj7n0g";
  var url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&sensor=false&key=${api_key}`;
  const response = await axios.get(url);
  const photo = response.config.url;
  return photo;
};

let Test = async () => {
  var url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=barbershop+in+Casablanca?fields=reviews?types=hair_cair&key=${api_key}`;
  const { data: response } = await axios.get(url); //use data destructuring to get data from the promise object
  let BarberShops_Data = [];
  let barberShop = {};

  async function get_allInfo(my_barbershop) {
    if (typeof my_barbershop.photos !== "undefined") {
      my_photo_reference = my_barbershop.photos[0].photo_reference;
      my_barbershop.photos = await get_photo(my_photo_reference);
    } else {
      my_barbershop.photos =
        "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?size=338&ext=jpg";
    }

    let reviews = await get_review_of_Barbers(my_barbershop.place_id);
    my_barbershop.reviews = reviews;
    barberShop.name = my_barbershop.name;
    barberShop.rating = my_barbershop.rating;
    barberShop.rating_total = my_barbershop.user_ratings_total;
    //console.log("my reviews" + my_barbershop.reviews);
    return my_barbershop;
  }
  const barbershop = await Promise.all(response.results.map(get_allInfo));

  return barbershop;

  /*****************************************************/
};

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
