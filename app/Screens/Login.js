import React, { useLayoutEffect,useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    SafeAreaView,
    TextInput,
    Alert
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import your icon library

import Button from "../Components/Button/Button";
import Logo from "../Components/Logo";
// import { Separator } from "react-native-btr";
// import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";


const Login = ({navigation}) => {

    const navigationOptions = {
        title: '', // Set the title for the header
        tabBarLabel: 'Profile',
        headerStyle:{
          backgroundColor:"#33485E"
        }
      };
    
      useLayoutEffect(() => {
        navigation.setOptions(navigationOptions);
      }, [navigation]);
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Validation or login logic here
        if (username.trim() === '' || password.trim() === '') {
          Alert.alert('Error', 'Please enter username and password');
        } else {
          // Simulated login action
          Alert.alert('Success', 'Logged in successfully!');
          // Reset fields after login
          setUsername('');
          setPassword('');
        }
      };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* <View style={styles.logo}>
                <Logo />
            </View> */}
            <View style={styles.buttonContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username or Email"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
                <Button title="Login" onPress={handleLogin} style={styles.button} />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor:'#33485E'
    },
    button: {
        width: "50%",
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    logo: {

        alignItems: "center",
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Login;
