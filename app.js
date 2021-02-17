'use strict'


/* let c = 10;
let sumOfThreeValuesAsExprassion = function(a, b){
    return a + b + c;
}
let resultOfFunction = sumOfThreeValuesAsExprassion(1, 2);
console.log(resultOfFunction); */






/* 
let ofThreeValues = function(){
    return function(){
        alert('hello');
    }
}

console.log(ofThreeValues)
console.log(ofThreeValues()) // возвращает вторую функцию,пока в ней пусто
console.log(ofThreeValues()())  */



/* sumOfTwoValues(a)(b); => a+b */
/* let sumOfTwoValues = function(a){
    return function(b){
        return a + b
    }
};
console.log(sumOfTwoValues(4)(2)); */




let makeCounter = function () {
    let count = 0;
    return function () {
        return ++count;
    }
};

let firstCounter = makeCounter();
let secondCounter = makeCounter();

firstCounter(); //1
firstCounter(); //2
firstCounter();// 3
firstCounter();// 4
secondCounter();//1
console.log(firstCounter()); //5
console.log(secondCounter()); //2