// UTC (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 미리초 단위로 표기)
console.log(new Date()); // 현재 시간 설정
console.log(new Date("Jun 5, 2022")); // 임의 지정
console.log(Date.now());


const now = new Date();
now.setFullYear(2023);
now.setMonth(11); // 0이 1월이다.
console.log(now);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMinutes());

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString("en-US")); // 지역언어 시간 형식