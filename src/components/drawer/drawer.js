import React, { Component } from 'react';
import {Button, Container, Text} from "native-base";
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import {Image, ImageBackground, TouchableOpacity, View} from "react-native";
import {removeUser} from "../../redux/actions";

class DrawerLayout extends Component{
    render(){
        return <Container style={{backgroundColor: 'gray'}}>


            <Button block title={1} onPress={()=>alert("hi")} >
                <Text >اطلاعات کاربری</Text>
            </Button>
        </Container>;
    }
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
};
const mapDispatchToProps=(dispatch)=> {
    return{
        removeUser:(user)=>{
            dispatch(removeUser(user));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DrawerLayout);