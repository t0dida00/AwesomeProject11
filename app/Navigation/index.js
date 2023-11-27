import React, {useState,useEffect} from "react";
import { NavigationContainer,View } from "@react-navigation/native";
import BottomTabNavigator from './BottomNavigation'; // Your bottom tab navigator component
import LoadingScreen from "../Screens/Loading/Loading";

export default function AppNavigation() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an asynchronous operation (e.g., data loading, authentication check)
  useEffect(() => {
    // Simulating a delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the delay
    }, 2000); // Adjust the delay time as needed

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <NavigationContainer>
      {isLoading ?<LoadingScreen /> :   <BottomTabNavigator/>}
    
    </NavigationContainer>
  );
}