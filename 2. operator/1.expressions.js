let b; //선언문 값으로 평가 될수없음 
b = 3; // 표현식, 할당문 

// let a = let b; 할당되지 않기 때문에 선언문이다.

console.log(b);
let a =  (b = 2);
console.log(a);
console.log(b);