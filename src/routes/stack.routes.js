import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens';
import { Classifications } from '../screens';
import { Team } from '../screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Classifications" component={Classifications} />
      <Stack.Screen name="Team" component={Team} />
    </Stack.Navigator>
  );
};

export default Routes;