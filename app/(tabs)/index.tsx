import React from "react";
import SplashScreen from "../../SplashScreenView";
import LoginScreen from "../../Login";
import { useEffect,useState } from "react";


export default function App(){

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 4000);
  
});
  

  return<>{isShowSplash ? <SplashScreen/> : <LoginScreen/>}</>;
   
}

