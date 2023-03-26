// null, underfined
let variable;
console.log(variable);

variable = null;

console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!


// typeof 데이터의 타입을 확인할수 있다.
console.log(typeof 123);
console.log(typeof "123");
console.log(typeof {});
console.log(typeof null); // null은 비어있다는것 나타내기 때문에 object 이다.
console.log(typeof undefined); // 정해지지 않은것
