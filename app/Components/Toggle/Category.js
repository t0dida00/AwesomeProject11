import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, UIManager, Dimensions, PanResponder, SafeAreaView } from 'react-native';
import styles from './styles';
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Category = (props) => {
  const { isToggled, toggle, setSelectedCategory,data } = props
  const handleSelection = (item) => { 
    setSelectedCategory(item.category)
    toggle()
  }

  return (
    <View>
      <View style={styles.headerView}>

        <Text style={styles.headerText}>
          Select category
        </Text>
        <TouchableOpacity style={styles.headerButton} onPress={() => toggle()} >
          <Text style={styles.headerButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentView}>
      <TouchableOpacity onPress={() => handleSelection({category:"All"})} style={styles.contentButton}>
            <Text style={styles.contentText}>All</Text>
          </TouchableOpacity>
        {data.map((item,index) => (
          <TouchableOpacity key={index} onPress={() => handleSelection(item)} style={styles.contentButton}>
            <Text style={styles.contentText}>{item.category}</Text>
          </TouchableOpacity>
        ))}
       
      </View>

    </View>
  );
};



export default Category;
