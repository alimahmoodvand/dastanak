import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text, View,
} from 'react-native';
import {Actions} from "react-native-router-flux";
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {addStory, removeStory, removeUser, saveUser} from "../../redux/actions";
import {connect} from "react-redux";
import Swipeout from "react-native-swipeout";
import styles from './story.css'
import Stars from 'react-native-stars'
 class Story extends Component {
     // actionButtons = [
     //     {
     //         component: (
     //             <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
     //                 <Text>حذف</Text>
     //                 <MIcon name="delete" size={25} color="red" />
     //             </View>
     //         ),
     //     },
     // ]
     actionButtons = [
         {
             component: (
                 <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                     <Text>افزودن</Text>
                     <MIcon name="add-box" size={25} color="#16a085" />
                 </View>
             ),
             onPress:()=>{this._addStory()}
         },
     ]
     myStory={};
     _addStory=()=> {
         if (this.props.stories.indexOf(this.myStory) === -1) {
             this.props.addStory(this.myStory)
         }
     };
     render() {
         const {story,index}=this.props;
         this.myStory=story;
         return (
             <View style={styles.container}>
                 <Swipeout right={this.actionButtons} autoClose={true}>
                     <View style={styles.content}>
                         <View style={styles.leftContent}>
                             <View>
                                 <Image source={{uri:story.image}} style={styles.storyImage}/>
                                 <Stars
                                     default={story.rate/index}
                                     // update={(val)=>{}}
                                     starSize={20}
                                     disabled={true}
                                     count={5}
                                     fullStar={<MIcon name={'lens'} size={15} color='rgb(64, 196, 255)'/>}
                                     emptyStar={<MIcon name={'radio-button-unchecked'} size={15} color='rgb(64, 196, 255)'/>}
                                 />
                             </View>
                         </View>
                         <View style={styles.rightContent}>
                             <View style={styles.detailRow}>
                                 <MIcon name={'book'} size={18} color='black'/>
                                 <Text style={styles.detailText}>{story.title}</Text>
                             </View>
                             <View style={styles.detailRow}>
                                 <MIcon name={'person'} size={18} color='black'/>
                                 <Text style={styles.detailText}>{story.writer}</Text>
                             </View>
                         </View>
                     </View>
                 </Swipeout>
             </View>
         );
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
        addStory:(story)=>{
            dispatch(addStory(story));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Story);