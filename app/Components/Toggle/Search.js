import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, UIManager, Dimensions, PanResponder, SafeAreaView, TextInput } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import your icon library

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Search = ({ isToggled, toggle, setSelectedValue }) => {
  const handleSelection = (item) => {
    setSelectedValue(item)
    toggle()
  }
  const [searchText, setSearchText] = useState('');
  const handleSearch = (text) => {
    setSearchText(text);
    console.log('Search Text:', text);
  };

  return (
    <View>
      <View style={styles.headerView}>
        <View style={styles.search}>
        <MaterialIcons name="search" size={24}   />

        <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchText}
      />
        </View>
     
        <TouchableOpacity style={styles.headerButton} onPress={() => toggle()} >
          <Text style={styles.headerButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentView}>

        {[1, 2, 3, 4, ].map((item) => (
          <TouchableOpacity key={item} onPress={() => handleSelection(item)} style={styles.contentButton}>
            <Text style={styles.contentText}>Search {item}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
};



export default Search;
