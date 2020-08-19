import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TravellersScreen from "../screens/TravellersScreen";
import TraverllerDetailsScreen from "../screens/TravellerDetailsScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TravellersScreen"
      component={TravellersScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TraverllerDetailsScreen"
      component={TraverllerDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
