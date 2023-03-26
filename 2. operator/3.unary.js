// 단항연산자 Unary Operators

// 단항연산자 Unary Operators
// + (양)
// -  (음)
// ! (부정) 


let a = 5;
a= -a; // -1 * 5;

console.log(a);
a= -a;
console.log(-a);

a = +a;
console.log(a);

a= -a; //-5
a= +a; // +(-5)
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 연산자를 사용하면 숫자가 아닌 타입들을 수자로 변환하면 어떤값이 나오는 지 확인 가능.


console.log(+false);
console.log(+null);
console.log(+"");
console.log(+"text")
console.log(+undefined);
console.log(!!1); // ! 부정연산자
// !! 값을 boolean 타입으로 변환