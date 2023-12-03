import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import necessary functions

export default function Lable(props) {
  const { data } = props
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() =>  navigation.navigate('Profile')}>
      <View style={[styles.markerContent1]} >

        <Text >{data.name}</Text>
        <Text style={[styles.text]} >Suggested by {data.author}</Text>

      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  markerContent1: {
    backgroundColor: '#FFF', // Background color of the marker content
    padding: 10,
    top: 0,
    zIndex: 9999,
    alignSelf: 'flex-start'
  },
  text: {
    fontSize: 10,
    color: '#C0C0C0'
  }
})
