import React from "react";
import SplashScreen from "../../SplashScreenView";
import LoginScreen from "../../Login";
import { useEffect,useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../../Signup';

const Stack = createStackNavigator();

export default function App(){

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 4000);
  
});
  

  return<>{isShowSplash ? <SplashScreen/> : <LoginScreen/>}</>;

 function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
   
}


