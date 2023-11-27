import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  LayoutAnimation,
  StatusBar,

} from "react-native";
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import your icon library
import ToggleViewFromBottom from "../../Components/Toggle/Toggle";
import styles from "./Home.style";
import Header from "../../Components/Header/Header";

const Home = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('Restaurant');
  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => {
    setIsToggled(!isToggled);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Apply animation
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header toggle={toggle} selectedValue={selectedValue} isToggled={isToggled}/>
      <View style={styles.contentWrapper}>
        <Text>Home screen content goes here</Text>
      </View>
      {/* Content */}
      {isToggled && (
        <ToggleViewFromBottom isToggled={isToggled} toggle={toggle} setSelectedValue={setSelectedValue} />
      )}
    </SafeAreaView>
  );
};
export default Home;
