// 함수도 객체타임 이다.
// 객체란 서로 연관되어있는 속성과 핼동을 묶어주기 위해 
// 객체는 순수 데이터 객체와 상태와 행동 객체 (함수 포함 객체도 있다.)
// Object literal {key:value}
// new Object()
// object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
    name:"apple",
    "hello":"😀",
    0: 1, 
    ["hello-bye1"] : "🤣",
};

//속성, 데이터에 접근하기 위해서는 
apple.name; // 마침표 표기범 dot notation
console.log(apple["hello-bye1"]) //대괄호 표기법 bracket notation
console.log(apple.name);
console.log(apple.hello);
console.log(apple.hello);

// 속성 추가 
apple.emoji = "😋";
console.log(apple.emoji);


// 속성 삭제
delete apple.emoji;
console.log(apple);

