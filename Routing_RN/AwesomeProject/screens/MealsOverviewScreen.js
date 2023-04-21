import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const renderMeals = (itemData) => {
    const pressHandler = (navigation) => {
      navigation.navigate("MealsDetails", {
        categoryId: itemData.item.title,
      });
    };
    const item = itemData.item;
    const MealsObj = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
    };
    return <MealItem {...MealsObj} onPress={pressHandler} />;
  };
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });
  //   console.log(displayMeals);r
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
