// 원시데이터 number, boolean, null, undefined, symbol
// 객체 object function 


// 자바스크립트에서는 어느형태 등의 숫자타입을 변수로 선언가능.

let integer = 123; //정수 
let negative = -123; // 음수
let double = 1.23; // 실수 

console.log(negative);
console.log(integer);
console.log(double);

let binary = 0b1111011; //2진수 비트단위 
let octal = 0o123; // 8진수 
let hex = 0x7b; // 16진수 


console.log(0/123); // 0 
console.log(123/0); // Infinity
console.log(123/-0); // -Infinity 
// Infinity 
// NaN  (Not a Number)

console.log(123/"text");


let bigInt = 12312412451035013050135023213n; // <-- 마지막에 n 을 붙여준다.

console.log(bigInt); // 원시 값이 안정적으로 나타낼쑤 있는 최대치보다 큰 정수를 표현한다.


