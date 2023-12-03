import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,

} from "react-native";
import styles from "./styles";
import Header from "../../Components/Header";
import { useAppContext } from "../../Context/AppContext";
import CustomBottomSheetModal from "../../Components/Modal";
import Category from "../../Components/Toggle/Category";
import Search from "../../Components/Toggle/Search";
import FlipCard from 'react-native-flip-card'
import Map from "../../Components/Map/Map";

const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalType, setModalType] = useState(null)
  const [isMapMode, setIsMapMode] = useState(true)
  const { handlePresentModalPress, data } = useAppContext();
  const [formattedData, setFormattedData] = useState([])
  useEffect(() => {
    let filteredData = selectedCategory === 'All' ? data[0] : data[0].filter(item => item.category === selectedCategory);
    setFormattedData(filteredData)
  }, [selectedCategory])
  // ?.map(item => ({
  //   icon: item.icon,
  //   category: item.category,
  // }));
  const toggle = (tag) => {
    setModalType(tag)
    handlePresentModalPress()
  };

  const handleMapMode = () => {
    setIsMapMode(!isMapMode)
  }

  const renderModalContent = () => {
    if (modalType === "category") {
      return <Category toggle={toggle} setSelectedCategory={setSelectedCategory} data={data[0]} />;
    } else if (modalType === "search") {
      return <Search toggle={toggle} setSelectedCategory={setSelectedCategory} />;
    }
    // Default case: If no modalType matches, render null or any default component
    return null;
  };

  const renderContent = () => {
    return (<FlipCard
      style={styles.card}
      friction={10}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={isMapMode}
      clickable={false}
    >
      {/* Face Side */}
      <View style={[styles.contentWrapper]} >

        <Text>List text</Text>

      </View>
      {/* Back Side */}

      <View style={[styles.contentWrapper, { backgroundColor: 'blue' }]}>
        <Map data={formattedData} />
      </View>
    </FlipCard>)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <CustomBottomSheetModal component={renderModalContent()} />
      <CustomBottomSheetModal  />
      <Header toggle={toggle} selectedCategory={selectedCategory} isMapMode={isMapMode} setIsMapMode={setIsMapMode} />
      {renderContent()}
    </SafeAreaView>
  );
};
export default Home;
