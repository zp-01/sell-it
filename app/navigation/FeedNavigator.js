import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingScreen from "../screens/ListingScreen";
import ListDetailScreen from "../screens/ListDetailScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, presentation: "modal" }}
  >
    <Stack.Screen name={routes.LISTING_SCREEN} component={ListingScreen} />
    <Stack.Screen name={routes.LISTING_DETAILS} component={ListDetailScreen} />
  </Stack.Navigator>
);
