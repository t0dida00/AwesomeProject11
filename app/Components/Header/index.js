import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    LayoutAnimation,
    StatusBar,

} from "react-native";
import React from 'react'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import your icon library

export default function Header(props) {
    const {toggle,selectedCategory,isToggled,isMapMode,setIsMapMode} = props
    return (
        <View style={styles.headerWrapper}>
            
            <TouchableOpacity onPress={() => toggle('category')} style={styles.button}>
                <View style={styles.selectedContent}>
                    <Text style={styles.text}>{selectedCategory}</Text>
                    <MaterialIcons name={isToggled ? "arrow-drop-up" : "arrow-drop-down"} size={25} color="#fff" />
                </View>
            </TouchableOpacity>
            <View style={styles.headerButtonView}>
            <TouchableOpacity onPress={() => toggle('search')} >
                <MaterialIcons name="search" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsMapMode(!isMapMode)}>
                <MaterialIcons name={isMapMode ? 'list' :'map'} size={24} color="white" />
            </TouchableOpacity>
            </View>
        
        </View>
    )
}