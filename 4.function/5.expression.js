// 함수 선언문 function name() {}
// 함수 표현식 const name = function () { }
// 함수도 객체이기 때문에 표현식에 할당가능
let add = function (a,b) {  //이름이 없는 함수를 무명함수라고함
return a + b;
};

console.log(add(1,2));

// 화살표 함수 const name = () => { }

add = (a,b) => {
    return a + b;
};

console.log(add(5,5));


// 대괄호도 생략가능
add = (a,b) => a+b;
 
//생성자 함수 const object = new Function (); 


// IIFE (Immediately-Invoked Function Expressions); 
(function run () {
    console.log("😆");
}) (); //함수를 () 으로 묶으면 바로 호출이 된다.

// 연습문제 

let minus = function (a,b) {
    return a - b;
}

console.log(minus(5,3));

minus = (a,b) => {
    return a - b;
}

console.log(minus(6,3));


const multi = (a,b) => {
    return a * b;
};

console.log(multi(2,6));