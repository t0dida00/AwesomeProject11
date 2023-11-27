import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#33485E",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#33485E",
    paddingHorizontal: 10,
    paddingVertical: 12,
    paddingTop: "5%",
  
  },
  
  contentWrapper: {
    alignItems: "center",
    justifyContent: 'center',
    flex: 1,
    backgroundColor:"#FFF"
  },
  
  selectedContent: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
   
  },
  text: {
    color: '#fff', fontSize: 18
  }
});

export default styles;