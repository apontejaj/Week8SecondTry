import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="One"
          component={ScreenOne}
          options={{ title: 'My super App' }}
        />
        <Stack.Screen
          name="Two"
          component={ScreenTwo}
          options={{ title: 'My Second Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
