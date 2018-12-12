import {combineReducers}from "redux";
import user from "./userReducer"
import stories from "./storyReducer"

const rehydrated=(state=false,action)=>{
    switch (action.type){
        case 'persist/REHYDRATE':
            // console.log(action.type,action,state)
            return true;
            break;
            // return {
            //     rehydrate:action.payload.rehydrate,
            //     user:action.payload.user
            // };
        default:
            return state;
    }
}
export default {
    rehydrated,
    user,
    stories
}