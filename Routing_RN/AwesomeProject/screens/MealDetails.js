import { View, Text } from "react-native";
import React from "react";

const MealDetails = ({ route }) => {
  const catId = route.params.mealId;
  return (
    <View>
      <Image />

      <Text>{catId}</Text>
    </View>
  );
};

export default MealDetails;
