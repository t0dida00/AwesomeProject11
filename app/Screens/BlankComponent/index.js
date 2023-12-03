import React, { useState} from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import styles from "./style";
import { useAppContext } from "../../Context/AppContext";

const BlankScreen = () => {
  const { handlePresentModalPress } = useAppContext();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.contentWrapper}>
        <Text>Blank page</Text>
      </View>
  
     
    </SafeAreaView>
  );
};
export default BlankScreen;
