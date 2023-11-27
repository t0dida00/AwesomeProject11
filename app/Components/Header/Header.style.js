import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: "row",
        alignItems: "center",
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
})

export default styles;