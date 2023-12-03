import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  headerView: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 20,
   
  },
  headerButton:{
    flex:1
  },
  headerText:{
  textAlign: "left",
   marginHorizontal: 15,
   fontSize:24,
   flex:3
  },
  headerButtonText:{
    textAlign: "right",
     marginHorizontal: 15,
     fontSize:16,
     fontWeight:600
    },
  contentView:{
    marginHorizontal: 12,
  },
  contentButton:{
    borderBottomColor: "#d4d0cd",
    borderBottomWidth: 1
  },
  contentText:{
    marginVertical: 20,
    fontSize: 16,
    color: 'black',
    fontWeight:600
  }, 
  searchBox: {
    height: 40,
    paddingLeft: 5,
    width:'100%'
  },
  search:{
    flex:3,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:12,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    paddingLeft:5
  }
})

export default styles;