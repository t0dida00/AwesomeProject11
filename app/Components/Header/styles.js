import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: "row",
        
        justifyContent: "space-between",
        backgroundColor: "#33485E",
        paddingHorizontal: 10,
        paddingVertical: 12,
        paddingTop: "5%",

    },
    text: {
        color: '#fff', fontSize: 18
    },
    selectedContent: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-start',

    },
    headerButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex:1,
        marginLeft:50,
    },
    button:{
        flex:3,
        alignItems:'flex-start'
    }
})

export default styles;