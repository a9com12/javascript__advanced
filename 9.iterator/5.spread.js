// Spread 연산자, 전개구문
// 모든 Interable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 쭉 펼쳐 질 수 있다. 
// function(...iterable)
// [...iterable]
//{...obj} 
// EcmaScript 2018 

function add (a,b,c) {
    return a + b + c;
}

const nums = [1,2,3];
console.log(add(...nums)); //... 스프레드 연산자

function minus (a,b ,c) {
    return  a - b - c;
}
const minusNums = [10,2,2];
console.log(minus(...minusNums));

// Rest parameters 

function sum(first, second, ...nums) {
    console.log(first, second, nums);
}
sum(1,2,0,1,2,4);

// Array Concat 
const fruit1 = ["🍏", "🍋"];
const fruit2 = ["🥝", "🍅"];
let arr = fruit1.concat(fruit2);
console.log(arr);
arr = [...fruit1,"🍑",...fruit2];
console.log(arr);

//Object 
const ellie = {name: "Ellie", age: 20};
const updated = {
    ...ellie,
    job: "s/w enginner",
}

console.log(ellie);
console.log(updated);