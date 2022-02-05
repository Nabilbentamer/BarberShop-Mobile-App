import React from "react";
import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import StarRating from "react-native-star-rating";

export default function Reviews(props) {
  const user_reviews = props.route.params.user_reviews;
  console.log(user_reviews);
  return (
    <ScrollView>
      {user_reviews.map((result, index) => (
        <TouchableOpacity
          style={{
            backgroundColor: "#eee",
            padding: 18,
            flexDirection: "row",
            maxWidth: "90%",
          }}
          key={index}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
            source={{
              uri: result.photo,
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginLeft: 8,
                }}
              >
                {result.name}
              </Text>
              <Text
                style={{
                  color: "gray",
                  fontSize: 8,
                  alignSelf: "center",
                  marginLeft: 8,
                }}
              >
                {result.time}
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 7 }}>
              <Stars rating={result.rating} />
            </View>
            <Text style={{ marginLeft: 10, paddingRight: 18, marginTop: 5 }}>
              {result.text}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const Stars = (props) => {
  return (
    <StarRating
      style={{ backgroundColor: "black", marginLeft: 8 }}
      disabled={false}
      maxStars={5}
      rating={props.rating}
      starSize={12}
    />
  );
};
