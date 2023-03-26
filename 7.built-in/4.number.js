const num1 = 123;
const num2 = new Number(123); // 메모리 낭비 
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE); // 정수 최대값 // e + 308 은 10의 308승
console.log(Number.MIN_VALUE); // 정수 최소값


if (num1 === Number.NaN) {

}
 
if(Number.isNaN(num1)) {

}


// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)

const num3 = 102;
console.log(num3.toExponential()); // 지수로 표기

// 반올림하여 문자열로 변환하기

const num4 = 1234.12;
console.log(num4.toFixed()); // 실수가 정수로 바뀌어 문자열로 변환

console.log(num4.toString); // 넘버를 문자열로 변환

console.log((num4.toLocaleString("ar-EG"))); // 숫자를 지역언어에 맞게

// 원하는 자릿수까지 유효하도록 반올림 
console.log(num4.toPrecision(5)); //원하는 자릿수까지 표현
console.log(num4.toPrecision(4)); //원하는 자릿수까지 표현
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기함

console.log(Number.EPSILON); // 0 과 1사이에서 나타낼수 있는 가장 작은 숫자

if(Number.EPSILON > 0 && Number.EPSILON < 1) {
console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2; // 0.1
console.log(num); // 정확하게 부동소수점까지는 계산이 되지 않음

function isEqual(original, expected) {
    return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(0.1,0.1));
console.log(isEqual(num,0.1)); //false가 나옴