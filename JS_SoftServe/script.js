function f1(a){
    let sum = a;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(f1(1,2,3,4,5));