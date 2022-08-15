const array = [1,2,3,4,5,6];

const result = array.reduce((reviousResult , currentValue) =>{
    return reviousResult + currentValue;
}, 0)


console.log(result);