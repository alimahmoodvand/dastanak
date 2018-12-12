import React, { Component } from 'react';
import {Image, Text, View, Dimensions, StyleSheet, TouchableOpacity, FlatList, RefreshControl} from "react-native";
import {removeUser, saveUser} from "../../redux/actions";
import {connect} from "react-redux";
import HeaderLayout from "../../components/header/header";
import Story from "../../components/story/story";
import styles from './home.css'
import MIcon from 'react-native-vector-icons/MaterialIcons';


class Home extends Component {
    componentWillMount(){
        this.props.saveUser({
            "fullName":"ali",
            "username":"alimhv",
            "mobile": "09396675507",
            "password":"g0nzales",
        });
        this._setStories();
    }
    _setStories=()=>{
        let stories=[
            {
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },{
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            }, {
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            }, {
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            }, {
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            }, {
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            }, {
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            }, {
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            }, {
                title:"راهای رسیدن بخدا ",
                writer:"پاعولو کوعلو",
                image:"https://raaz.co/images/raaz/thumbnails/1505235514014.png",
                rate:4.5,
            },
        ]
        let start=this.state.page*this.state.count;
        let end=start+this.state.count;
        console.log(this.state,start,end)
        if(this.state.selected==='جدیدترین')  {
            let slice=
          setTimeout(()=>{
              console.log(stories.slice(start,end<stories.length?end:stories.length))
              this.setState({
                  stories:this.state.stories.concat(stories.slice(start,end<stories.length?end:stories.length)),
                  refreshing:false
              })
          },200)
      }else{
            console.log(this.props.stories.slice(start,end<this.props.stories.length?end:this.props.stories.length))
            setTimeout(()=>{
                this.setState({
                stories:this.state.stories.concat(this.props.stories.slice(start,end<this.props.stories.length?end:this.props.stories.length)),
                refreshing:false
            })
            },200)
        }
    };
    state= {
        menuItems: [
            'جدیدترین',
            'داستان من'
        ],
        page: 0,
        count: 6,
        refreshing:false,
        stories:[],
        selected: 'جدیدترین'
    };

    render() {

        return (
            <View style={styles.body} >
                <HeaderLayout/>
            <View style={styles.menuBar}>
                {
                    this.state.menuItems.map((item, index) => {
                        let style = {};
                        if (index === 0) {
                            style.borderTopLeftRadius = 5;
                            style.borderBottomLeftRadius = 5;
                        } else if (index === this.state.menuItems.length - 1) {
                            style.borderTopRightRadius = 5;
                            style.borderBottomRightRadius = 5;
                        }
                        return (
                            <View key={index} style={[styles.itemContainer]}>
                                <TouchableOpacity style={[styles.menuItem, style]} onPress={() => {
                                    this.setState({selected:item,page:0,stories:[]},()=>{
                                        this._setStories();
                                    })
                                }}>
                                    <Text style={[styles.menuItemsText]}>{item}</Text>
                                </TouchableOpacity>
                                <View style={styles.itemIcon}>
                                    {this.state.selected === item &&
                                    <Image source={require('./../../assets/images/icons/arrow-down.png')}
                                           style={{width: 25, height: 12}}/>
                                    }
                                </View>
                            </View>
                        );
                    })
                }

            </View>
                <FlatList
                data={this.state.stories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) =>{
                    return <Story index={index+1} story={item}/>
                }}
                refreshControl={
                    <RefreshControl
                        onRefresh={this._pullRefresh}
                        refreshing={this.state.refreshing}
                        colors={["#16a085", "#16a085"]}
                    />
                }
                onEndReached={()=>{
                    if(this.state.stories.length>=this.state.count)
                    {
                        this.setState({page:this.state.page+1},()=>{
                            this._setStories();
                        })
                    }
                }}
                ListFooterComponent={() => { return <Image source={require('./../../assets/images/loading.gif')} />}}
                onEndReachedThreshold={0.1}
            />
            </View>
        );
    }
    _pullRefresh=()=>{
        console.log(this.state.refreshing)
        this.setState({
            page:0,
            stories:[],
            refreshing:true
        },()=>{
            this._setStories();
        });

    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user,
        stories:state.stories,
    }
};
const mapDispatchToProps=(dispatch)=> {
    return{
        removeUser:(user)=>{
            dispatch(removeUser(user));
        },saveUser:(user)=>{
            dispatch(saveUser(user));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);