import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../screens/Home';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import ChangePassword from '../screens/Changepassword';
import BloodRequest from '../screens/BloodRequest';
import Profile from '../screens/Profile';









const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
      <Stack.Screen name="BloodRequest" options={{ headerShown: false }} component={BloodRequest} />
      <Stack.Screen name="Dashboard" options={{ headerShown: false }} component={Dashboard} />
      <Stack.Screen name="ChangePassword" options={{ headerShown: false }} component={ChangePassword} />
      <Stack.Screen name="home" options={{ headerShown: false }} component={home} />
      <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;