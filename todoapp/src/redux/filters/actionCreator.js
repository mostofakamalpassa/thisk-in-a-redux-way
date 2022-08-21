import {COLOR_CHANGED, STATUS_CHANGED} from './actionTypes'



export const colorChanged = (color, changeType)=>{
    return{
        type:COLOR_CHANGED,
        payload:{
            color,
            changeType
        }
    }
}

export const statusChanged = (status)=>{
    return{
        type:COLOR_CHANGED,
        payload:{
            status
        }
    }
}