import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  id,
  affordability,
}) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("MealsDetails", {
      mealId: id,
    });
  };
  return (
    <View style={style.mealConatiner}>
      <Pressable onPress={pressHandler}>
        <View>
          <Image style={style.image} source={{ uri: imageUrl }} />
          <Text style={style.title}>{title}</Text>
        </View>
        <View style={style.details}>
          <Text style={style.detailItem}>{duration} m</Text>
          <Text style={style.detailItem}>{complexity}</Text>
          <Text style={style.detailItem}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const style = StyleSheet.create({
  mealConatiner: {
    flex: 1,
    elevation: 8,
    borderRadius: 8,
    backgroundColor: "white",
    margin: 16,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 16,
  },
});
