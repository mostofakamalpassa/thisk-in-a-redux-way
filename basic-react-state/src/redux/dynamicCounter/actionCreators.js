import {DYNAMIC_INCREMENT, DYNAMIC_DECREMENT} from './actionTypes';


//  increment action Creator 

const dynamicCounterIncrement = (value)=>{

    return{
        type:DYNAMIC_INCREMENT,
        payload: value
    }
}

//  decrement action Creator 

const dynamicCounterDecrement = (value)=>{

    return{
        type:DYNAMIC_DECREMENT,
        payload: value
    }
}

