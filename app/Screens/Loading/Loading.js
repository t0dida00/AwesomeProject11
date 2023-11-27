import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../Components/Logo';
import styles from './Loading.style';
const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            {/* <ActivityIndicator size="large" color="#0000ff" /> */}
            {/* <Text style={styles.loadingText}>Loading...</Text> */}
            <Logo></Logo>
        </View>
    );
};



LoadingScreen.navigationOptions = {
    title: null, // Hide the title in the header
    headerStyle: {
      backgroundColor: '#abcdef', // Change the header background color
    },
    headerTintColor: '#fff', // Change the text color of header elements
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
export default LoadingScreen;
