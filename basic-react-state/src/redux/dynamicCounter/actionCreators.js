import {DYNAMIC_INCREMENT, DYNAMIC_DECREMENT} from './actionTypes';


//  increment action Creator 

export const dynamicCounterIncrement = (value)=>{

    return{
        type:DYNAMIC_INCREMENT,
        payload: value
    }
}

//  decrement action Creator 

export const dynamicCounterDecrement = (value)=>{

    return{
        type:DYNAMIC_DECREMENT,
        payload: value
    }
}

 

