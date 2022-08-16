const initialzeState = {
    value: 2
}


function pure(state = initialzeState){

    return {
        ...state,
        value: state.value * 5
    }
}

pure();

console.log(initialzeState.value);