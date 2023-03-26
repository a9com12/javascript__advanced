// 콜백함수 조건이 맞으면 나중에 호출.

const add = (a,b) => a + b;
const multi = (a,b) => a * b;

function calculator (a,b,callback) {
    let result = callback (a,b);
    console.log(result);
    return result;
}

calculator( 5, 2, multi);

// 전달된 action은 콜백함수이디.
// 전달될 당시에 함수를 바로 호출해서 호출해서 반환된 값을 
//전달 하는것이 아니라 함수를 가리키고 있는 함수의 레퍼런스 (참조)
//전달된다. 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 (callback) 불려진다. 


const minus = (a,b) => a - b;
const divide = (a,b) => a / b;

function negativeCalculator (a,b,callback) {
    let result = callback (a,b);
    console.log(result);
    return result;
}

negativeCalculator(5,10,minus);
negativeCalculator(10,2,divide);