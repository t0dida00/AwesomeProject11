// Button.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './Button.styles';
const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};



export default Button;
