const state = {
    value: 5
};


function impure(val){
    state.value = state.value * val;
}


impure(2);

console.log(state.value);
impure(2);
console.log(state.value);