console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval("const num = 2; console.log(num)");
console.log(isFinite(Infinity));

console.log(parseFloat("12.423")); // 실수까지
console.log(parseInt("12.423")); // 정수변환

//URL (URI 하위 개념) Uniform Resource Identifer 
// 아스키 문자로만 구성되어야만 한다.
// 한글이나 특수문자는 이스케이프 처리 해야한다.

const URL = "https://드림코딩.com";
const encoded = encodeURI(URL); //이스케이프 처리를 해야한다.
console.log(encoded);

const decoded = decodeURI(encoded); // 다시 복원시킴.
console.log(decoded);

// 전체 URL 이 아니라 부분적인것을 사용할때는 Component 사용

const part = "드림코딩.com"; // URL의 부분적인것을 이스케이프 처리 해줌.
console.log(encodeURIComponent(part));