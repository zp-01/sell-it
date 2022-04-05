import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MessageScreen from "../screens/MessageScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export default MyaAccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.MY_ACCOUNT} component={MyAccountScreen} />
    <Stack.Screen name={routes.MESSAGE} component={MessageScreen} />
  </Stack.Navigator>
);
