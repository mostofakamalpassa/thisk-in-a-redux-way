const actions = [
    {type:'increment', payload: 1},
    {type:'increment', payload: 1},
    {type:'decrement ', payload: 1},
    {type:'increment', payload: 1},
]


const counterReducer = (state, action) =>{

    if(action.type === 'increment'){
        return {
            ...state,
            value: state.value + action.payload
        }
    } else if(action.type === 'decrement'){
        return{
            ...state,
            value: state.value - action.payload
        }
    }

    return state;
}

const  intialState = {
    value:0
}

const finalResult =  actions.reduce(counterReducer, intialState);

console.log(finalResult);