// 원시타입은 값이 복사되어 전달된다. copy by value
// 
let a = 1;
let b= a;
b = 2;
console.log(b);
console.log(a);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달된다. copy by reference

let apple = {
    name: "apple",
};

let orange = apple;
let potato = orange;

console.log(orange);
console.log(apple);
console.log(potato);

orange.name = "orange"; // 한곳에서만 바꿔도  apple 에도 적용

console.log(orange);
console.log(apple);
console.log(potato);


potato.name = "potato";

console.log(orange);
console.log(apple);
console.log(potato);