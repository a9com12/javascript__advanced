// Nullish Coalescing Operator 
// ES11 (ECMAScript 2022)
// ?? null, undefined 이렇게 생김 
// || falshy한 경우 설정 (할당) 0,-0, ""

let num = 0; 
console.log(num || "-1"); 
// 0이 false 인경우 에는 -1가 나올수밖에없음 유의!!
// || 을 쓰면 안된다.
// 그럴때 ?? 를 사용한다. 
// num이 아무런 값이 없을때만 -1 이 나오게 한다.
console.log(num ?? "-1"); 