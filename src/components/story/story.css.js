import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    container:{
        borderBottomColor:'black',
        borderBottomWidth:1,
    },
    content:{
        width:'100%',
        flexDirection:'row',
        // height:40
    },
    leftContent:{
        flex:0.3,
        // backgroundColor:'red',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',

    },
    rightContent:{
        flex:0.7,
        marginRight:10,
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
    },
    detailRow:{
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        width:'100%',
    },
    detailText:{
        color:'black',
        fontSize:14,
    },
    storyImage: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius:25,
    }
});