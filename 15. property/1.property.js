// 오브젝트를 조금더 세밀하게 수정할떄 사용한다.


const dog = {name:"와우", emoji: "🐶"};

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

// dog 객체안에 name 이라는 키기 았니
console.log("name" in dog);
console.log(dog.hasOwnProperty("name"));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨.
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

// 인자하나의 정보만 받아온다.
const desc = Object.getOwnPropertyDescriptor(dog, "name");

Object.defineProperty(dog, "name",{
    value : "😆",
    writable: false,
    enumerable: false,
    configurable: false,
});

console.log(dog.name);
// 열거 불가능 
console.log(Object.keys(dog));
delete dog.name;
// 삭제 불가능
console.log(dog.name);