import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import your icon library

import Login from '../Screens/Login';
import Home from '../Screens/Home';
import BlankScreen from '../Screens/BlankComponent';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#33485E',
        headerShown: false,
      }}
      id="tabs"
      tabBarStyle={{flex:1}}
      
    >
      <Tab.Screen
        name="Profile"
        component={BlankScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
          tabBarVisible: false  ,
          headerShown: false,
        })}
        initialParams={{ isToggled: false }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" color={color} size={size} />
          ),
          tabBarVisible: false  ,
          headerShown: false,
        })}
        initialParams={{ isToggled: false }}
      />

      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="star" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
