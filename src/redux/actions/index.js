import {
    ADD_STORY,
    REMOVE_STORY,
    REMOVE_USER,
    SAVE_USER
} from "./types";


export const saveUser=(user)=>({
    type:SAVE_USER,
    user
})
export const removeUser=(user)=>({
    type:REMOVE_USER,
    user
})
export const addStory=(story)=>({
    type:ADD_STORY,
    story
})
export const removeStory=(story)=>({
    type:REMOVE_STORY,
    story
})