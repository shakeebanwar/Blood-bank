import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../screens/Home';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import ChangePassword from '../screens/Changepassword';
import BloodRequest from '../screens/BloodRequest';
import Profile from '../screens/Profile';
import BloodRequestDashboard from '../screens/BloodRequestDashboard';
import MyBloodRequestDashboard from '../screens/MyBloodRequest';
import Donor from '../screens/Donor';
import Splash from '../screens/Splash';
import Drawer from '../screens/Drawer';










const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Drawer" options={{ headerShown: false }} component={Drawer} />
      <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
      <Stack.Screen name="Donor" options={{ headerShown: false }} component={Donor} />
      <Stack.Screen name="BloodRequestDashboard" options={{ headerShown: false }} component={BloodRequestDashboard} />
      <Stack.Screen name="MyBloodRequestDashboard" options={{ headerShown: false }} component={MyBloodRequestDashboard} />
      <Stack.Screen name="BloodRequest" options={{ headerShown: false }} component={BloodRequest} />
      <Stack.Screen name="home" options={{ headerShown: false }} component={home} />
      <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
      <Stack.Screen name="Dashboard" options={{ headerShown: false }} component={Dashboard} />
      <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
      <Stack.Screen name="ChangePassword" options={{ headerShown: false }} component={ChangePassword} />
   
      
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;