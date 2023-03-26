// boolean 타입은 참과 거짓 이 있다.

// 활용예 ;
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear()
;
// !! 느낌표를 두개를 넣으면 boolean 값을 반환해준다.

// Falshy 거짓인 값 
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);


// Truthy 참인 값 
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{});
console.log(!!Infinity);