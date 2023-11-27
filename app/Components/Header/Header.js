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
import styles from './Header.style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import your icon library

export default function Header({toggle,selectedValue,isToggled}) {
    return (
        <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={toggle} style={styles.button}>
                <View style={styles.selectedContent}>
                    <Text style={styles.text}>{selectedValue}</Text>
                    <MaterialIcons name={isToggled ? "arrow-drop-up" : "arrow-drop-down"} size={25} color="#fff" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggle} style={styles.button}>
                <MaterialIcons name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}