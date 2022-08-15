// initial state 

const initialState = {
    count:0
}


// action   identifiers

const INCREMENT_ACTION ='increment';
const DECREMENT_ACTION  = 'decrement';


// action creator  is a function 
const increment = (value)=>{
    return{
        type:INCREMENT_ACTION, // mandatory 
        count:value

    }
}

const decrement = (value) =>{
    return {
        type:DECREMENT_ACTION, // mandatory
        count: value
    }
}

// reducer function   create 

// reducer is simple javaScript functions 


function counterReducer(state = initialState, action ){
   if(action.type === INCREMENT_ACTION){
        return{
            ...state,
            count: state.count + action.count
        }
   }

   if(action.type === DECREMENT_ACTION){
        return{
            ...state,
            count: state.count - action.count
        }
   }

   return state;
}

// create  store 
const store =  Redux.createStore(counterReducer);

// button click listeners 
const counterEl = document.getElementById('counter');
const counterIncrement = document.getElementById('increment');
const counterDecrement = document.getElementById('decrement');

const render = () =>{
    const state = store.getState();
    counterEl.innerText = state.count.toString();
    
}
// update ui initially 
render();

store.subscribe(render);

counterIncrement.addEventListener('click', ()=>{
        store.dispatch(increment(5))

})

counterDecrement.addEventListener('click', ()=>{

    store.dispatch(decrement(2))
})