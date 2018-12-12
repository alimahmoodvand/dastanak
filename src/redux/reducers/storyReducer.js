import {REMOVE_STORY, ADD_STORY} from "../actions/types";

const initState=[];
export default stories=(state=initState,action={})=>{
    const {story} =action;
    // return initState;
    switch (action.type){
        case ADD_STORY:
            if(state.indexOf(story)===-1){
                return [...state,story]
            }else{
                return state;
            }
        case REMOVE_STORY:
            return  state.filter(item => item !== story);
        default:
            return state;
    }
}