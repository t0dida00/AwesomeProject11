import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import styles from "./style";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import your icon library
import { useAppContext } from "../../Context/AppContext";
import CustomizeMarker from "./Marker";

export default function Map(props) {  
  const [markers, setMarkers] = useState([]);
  const { isLabelVisible, setIsLabelVisible } = useAppContext()
  const { data } = props
  const [region, setRegion] = useState({
    latitude: 39.472963,
    longitude: -0.345730,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  useEffect(() => {
    const generateRandomMarkers = () => {
      const newMarkers = [];
      for (let i = 0; i < 10; i++) {
        // Generating random coordinates within a range around the centerRegion
        const latitude = region.latitude + (Math.random() - 0.5) * 0.1;
        const longitude = region.longitude + (Math.random() - 0.5) * 0.1;

        newMarkers.push({
          id: i,
          title: `Marker ${i + 1}`,
          description: `This is Marker ${i + 1}`,
          latitude,
          longitude,
        });
      }
      setMarkers(newMarkers);
    };

    generateRandomMarkers();
  }, []);

  
  const handlePress = () =>{
    setIsLabelVisible(null)
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={region}
     onPress={handlePress}
     showsUserLocation={true}
     pitchEnabled={true}
    >
      {data.map((marker,index) => (
        <CustomizeMarker  data={marker} index={index} key={index} />
      ))}
    </MapView>
  )
}