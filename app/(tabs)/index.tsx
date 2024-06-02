import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../SplashScreenView';  // Import the SplashScreen
import LoginScreen from '../../Login';
import SignupScreen from '../../Signup';
import MapScreen from '../../MapScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period (e.g., fetching data, checking auth state)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    
  );
}


