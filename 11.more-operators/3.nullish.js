// Nullish Coalescing Operator 
// ES11 (ECMAScript 2022)
// ?? null, undefined
// || falshy한 경우 설정 (할당)

let num = 0; 
console.log(num || "-1"); // 0이 false 인경우 에는 -1가 나올수밖에없음 유의
console.log(num ?? "-1"); 