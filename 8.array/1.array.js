// 배열 생성 방법

let array = new Array(2); // 두개의 아이템을 저장하는 배열
console.log(array);
let array2 = new Array(5)
console.log(array2);

array = new Array(1,2,3); // 두개의 아이템을 저장하는 배열
console.log(array);
array2 = new Array(1,2,3,4,5);
console.log(array2);

array = Array.of(1,2)  //static 함수 이용 
console.log(array);
array2 = Array.of(1,2,3,4,5);
console.log(array2);

const anotherArray = [1,2,3,4,] // 리터럴을 이용해서 만듬
console.log(anotherArray);
array = Array.from("text");
console.log(array);
const amazingArray = [1,2,3,4,5,6]
console.log(amazingArray);
array2 = Array.from("Hello");
console.log(array2);


// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야한다.
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않을수도 있다.
// 오브젝트와 유사함.
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다.
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음. (Typed collection)

array = Array.from({ 
    0: "안",
    1: "녕",
    length:2, 
});

console.log(array);

array2 = Array.from({
    0: "싫",
    1:"어",
    2:"요",
    length:3
});

console.log(array2);