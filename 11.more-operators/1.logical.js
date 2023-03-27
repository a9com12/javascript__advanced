// 논리연산자 Logical Operator
// && 그리고 조건중 두개이상 
// || 또는 조건중에 하나라도 true면 true
// 단축평가 : short-circuit evaluation 

const obj1 = {name: "dog"};
const obj2 =  {name: "cat", owner: "Ellie"};

if (obj1 || obj2) {
    console.log("both true!");
}

// 조건문 밖에서 쓰면 평가를 단축함
// 변수에 할당하는 경우라면 평가하지 않는다.

let result = obj1 && obj2;  // 뒤에것이 할당
console.log(result);



result = obj1 || obj2; // 먼저 true인것이 할당
console.log(result);


// 활용예
// && 조건이 true 일때, && 무언가를 해야할 경우
// || 조건이 false 일때, || 무언가를 해애할 경우

function changeOwner(animal) {
    if(!animal.owner) {
        throw new Error("owner does not exist.");
    }
    animal.owner = "changed owner!";
}



function makeNewOwner (animal) {
    if(animal.owner) {
        throw new Error("owner exists");
    }
    animal.owner = "new owner!"
}


obj1.owner && changeOwner(obj1); // owner 값이 있다면 (true) changeOwner 호출
obj2.owner && changeOwner(obj2); // 
console.log(obj1);
console.log(obj2);


obj1.owner || makeNewOwner (obj1); //owner 값이 없으면 makeNewOwner 실행
obj2.owner || makeNewOwner (obj2);
console.log(obj1);
console.log(obj2);


// null 또는 undefined인 경우를 확인할때
let item = {price: 1};
const price = item && item.price;
console.log(price);


// 기본값을 설정
// default parameter 전달하지 않거나, undefined 인경우만 설정
// || 값이 false 한경우 설정 0, -0,  null, undefied, ""
function print(message) {
    const text = message || "Hello";
    console.log(text);
}

print();
print(undefined);
print(0);
print(null);
print("");