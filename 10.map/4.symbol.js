// Symbol 심벌
// 유일한 키를 생성할수 있음

const map = new Map();
// const key1 = "key";
// const key2 = "key";
const key1 = Symbol("key");
const key2 = Symbol("key");
map.set(key1, "Hello"); 
console.log(map.get(key2));
console.log(key1 === key2);

//Symbol은 이름을 똑같아도 서로 다른 값이 생성된다. 
// 이름이 같아도 고유한 키값을 만들때 사용한다.
// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레이스트리 (Global Symbol Registry)

const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(k1 === k2);

console.log(Symbol.keyFor(k1)); // 심볼이 가지고있는 문자열의 정보를 보내줌.
console.log(Symbol.keyFor(key1)); // 일반심볼은 문자열에 대한 정보가 숨겨져있어어 undifined이 된다.

const obj = {[k1]: "Hello", [Symbol("key")]: 1};
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol("key")]);

