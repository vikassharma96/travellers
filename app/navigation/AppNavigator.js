import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TravellersScreen from "../screens/TravellersScreen";
import TraverllerDetailsScreen from "../screens/TravellerDetailsScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Travellers"
      component={TravellersScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TravellerDetails"
      component={TraverllerDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
