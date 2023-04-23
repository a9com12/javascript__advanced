// JSON: JavaScript Object Notation
// 서버와 클라이언트 (브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object) : JSON
// parse(JSON): object
const ellie = {
    name: "ellie",
    age: 20,
    eat: () => {
        console.log("eat");
    },
};
// json에 포함되는건 데이터만 서버에 보낼수있다.
// 직렬화 Serialzing: 객체를 문자열로 변환 
const json = JSON.stringify(ellie);
console.log(ellie);
console.log(json);

// 역직렬화 Deserializng: 문자열 데이터를 자바스크립트 객체로 변환 
// parse를 json파일을 다시 객체로
const obj = JSON.parse(json);
console.log(obj);

