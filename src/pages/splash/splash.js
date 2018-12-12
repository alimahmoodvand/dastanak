import React, { Component } from 'react';

import {Image, StyleSheet, View} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import  {Animated,Easing}from "react-native";

class Splash extends Component {
    state = {
        offsetX: new Animated.Value(0),
    }

    render() {
        // console.log(this.props.rehydrated)

        setTimeout(() => {
            if (this.props.rehydrated)
                Actions.homep();
        }, 1000)
        return (
            <View style={styles.container}>
                <Image  style={styles.bgimage} source={require('../../assets/images/bg.jpg')}/>
                <View style={styles.content}>
                    <Animated.View
                        style={[styles.logo, {flexDirection: 'row'}, {transform: [{translateX: this.state.offsetX}]}]}>
                        {/*<Image source={require("./../../assets/images/icons/arrow-down.png")} style={styles.logo}/>*/}
                    </Animated.View>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    bgimage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    logo:{
        flex:1,
        height:75,
        // backgroundColor:'blue'
    },
    container:{
        flex:1,backgroundColor:'rgba(0,0,0,0)'
    },
    content:{flex:1,backgroundColor:'rgba(0,0,0,0)',justifyContent:'center',alignItems:'center',flexWrap:'wrap',flexDirection:'row'}
})


const mapStateToProps=state=>{
    return{
        user:state.user,
        rehydrated:state.rehydrated
    }
}
const mapDispatchToProps=(dispatch)=> {
    return{
        saveCategories:(categories)=>{
            dispatch(saveCategories(categories));
        },
        saveMessages:(messages)=>{
            dispatch(saveMessages(messages))
        },
        saveUser:(messages)=>{
            dispatch(saveUser(messages))
        },
        removeUser:()=>{
            dispatch(removeUser())
        },
        initBookmark:(products)=>{
            dispatch(initBookmark(products))
        },
        initProduct:(products)=>{
            dispatch(initProduct(products))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Splash)