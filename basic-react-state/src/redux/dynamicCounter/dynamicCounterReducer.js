import {DYNAMIC_DECREMENT, DYNAMIC_INCREMENT} from './actionTypes'
// reducer 
const initialState = {
    value:5
}

 const dynamicCounterReducer = (state = initialState, action)=>{
    switch(action){

        case DYNAMIC_INCREMENT:
            return{
                ...state,
                value:state.value + action.payload
            }
        case DYNAMIC_DECREMENT:
            return{
                ...state,
                value: state.value - action.payload
            }
        default:
         return state;

    }
}

export default  dynamicCounterReducer