import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, UIManager, Dimensions, PanResponder } from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ToggleViewFromBottom = ({ isToggled, toggle, setSelectedValue }) => {
  const [contentHeight, setContentHeight] = useState(0);
  const screenHeight = Dimensions.get('window').height;
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (_, gestureState) => {
          return Math.abs(gestureState.dy) > 5; // Allow only if vertical swipe exceeds a threshold
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dy > 100) {
            console.log('scroll down');
            toggle(false);
          }
        },
      }),
    [isToggled, toggle]
  );
  const toggleAnimation = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (isToggled) {
      setContentHeight(screenHeight * 0.9); // Set the height to 90% of the screen
    } else {
      setContentHeight(0);
    }
  };
  useEffect(() => {

    const animationDelay = 0.1; // Set your desired animation delay in milliseconds
    const animationTimer = setTimeout(() => {
      toggleAnimation();
    }, animationDelay);

    return () => clearTimeout(animationTimer);
  }, [isToggled, screenHeight]);

  const handleSelection = (item) => {
    setSelectedValue(item)
    toggle(false)
  }

  return (
    <View {...panResponder.panHandlers}  style={[{backgroundColor:"#FFF"},isToggled ? {top:-25} : {bottom:-60}]}>
      <View style={{ alignItems: "center", backgroundColor: "#33485E", justifyContent: "space-between", flexDirection: "row", paddingVertical: 20 }}>
        <Text style={{ color: "#FFF", flex: 1 }}>

        </Text>
        <Text style={{ color: "#FFF", flex: 1 }}>
          What do you want?
        </Text>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => toggle(false)} >
          <Text style={{ color: "#FFF", textAlign: "right", marginHorizontal: 15 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { height: contentHeight }]}>

        {[1, 2, 3, 4, 5].map((item) => (
          <TouchableOpacity key={item} onPress={() => handleSelection(item)} style={styles.touchableOpacity}>
            <Text style={styles.card}>Toggled {item}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  card: {
    marginVertical: 20,
    fontSize: 16,
    color: 'black',
  },
  touchableOpacity: {
    // Styles for TouchableOpacity
    borderBottomColor:"#d4d0cd",
    borderBottomWidth:1
  },
  icon: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ToggleViewFromBottom;
