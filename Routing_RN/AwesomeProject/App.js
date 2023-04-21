import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetails from "./screens/MealDetails";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {/* <CategoriesScreen /> */}
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="MealsDetails"
            component={MealDetails}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  homeContainer: {},
});
