// initial state 

const initialState = {
    count:0
}


// reducer function   create 

// reducer is simple javaScript functions 


function counterReducer(state = initialState, action ){
   if(action.type === 'increment'){
        return{
            ...state,
            count: state.count + 1
        }
   }

   if(action.type === 'decrement'){
        return{
            ...state,
            count: state.count - 1
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
        store.dispatch({
            type:'increment'
        })

})


counterDecrement.addEventListener('click', ()=>{

    store.dispatch({
        type:'decrement'
    })
})