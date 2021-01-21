import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../screens/Home';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';









const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="home" options={{ headerShown: false }} component={home} />
      <Stack.Screen name="Dashboard" options={{ headerShown: false }} component={Dashboard} />
      <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;