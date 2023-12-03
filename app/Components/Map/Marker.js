import { View, Text, StyleSheet, Touchable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Marker } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import your icon library
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Label from './Label';
import { useAppContext } from '../../Context/AppContext';

export default function CustomizeMarker(props) {
    const { coordinate, data, index } = props
    const { isLabelVisible, setIsLabelVisible,toggleLabelVisibility } = useAppContext()
    // const [isClicked,setIsClicked] = useState(false)
    const handleClick = () => {
        setIsLabelVisible(index)
    }
    return (
    
        <Marker coordinate={{ latitude: data.coordinate.latitude, longitude:  data.coordinate.longitude }} >
            <View style={styles.markerContainer}>
            {isLabelVisible == index  ?  <Label data={data}/> : null}
                <TouchableWithoutFeedback onPress={handleClick}>
                    <View style={styles.markerContent} >

                        <View style={styles.signal} />
                        <View style={styles.icon} >
                            <MaterialIcons name={data.icon} size={18} />
                        </View>

                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.markerNose} />
            </View>
        </Marker>
       
    )
}
const styles = StyleSheet.create({
    markerContainer: {
        alignItems: 'center',
        // position: 'relative',
        
    },
    markerContent: {
        backgroundColor: '#FFF', // Background color of the marker content
        //   padding: 8, // Padding around the content
        //   borderRadius: 8, // Border radius to make it round
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        //   paddingTop:0

    },
    markerContent1: {
        backgroundColor: '#FFF', // Background color of the marker content
        padding: 10,
        position: 'absolute',
        top: -40,
        width: 150

    },
    markerNose: {
        width: 0,
        height: 0,
        borderTopWidth: 10, // Adjust the size of the "nose"
        borderLeftWidth: 14,
        borderRightWidth: 14,
        borderBottomWidth: 0,
        borderTopColor: '#33485E', // Match the content's background color
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    signal: {
        backgroundColor: 'red',

        height: 4
    },
    icon: {
        padding: 4
    }
});