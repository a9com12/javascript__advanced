// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는것은 좋지 않다.
// 상태변경이  필요한경우 새로운 상태(오브젝트.값)을 만들어서 반환해야한다.
// 원시값은 값에 의한 복사 
// 객체값은 참조에 의한 복사 (메모리주소)
function display(num) {
    num = 5; // 절대바꾸면 안됨 ❌
    console.log(num);
}
const value = 4;
display(value);

function displayObj(obj) {
    obj.name = "bob"; // ❌❌❌ 외부에 이미 객체값이 있는데 안에서 바꾸면 안됨
    console.log(obj);
}

const ellie = {name: "Elle"};
displayObj(ellie);
console.log(ellie);

function changeName(obj) {
    return {...obj, name:"bob"}
}
 // 이름부터 변경하는 느낌을 주도록!
 // 반환할때는 새로운 오브젝트를 만들기!
