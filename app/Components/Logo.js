import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('../../assets/icon.png')} // Replace with your logo path
      style={styles.logo}
      resizeMode="contain" // Adjust the resizeMode as needed
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150, // Set the desired width for your logo
    height: 150, // Set the desired height for your logo
  },
});

export default Logo;
