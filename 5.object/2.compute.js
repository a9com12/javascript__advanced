//정적 접근 : 코드를 작성하는 시점에 이미 어떤 property에 접근하는지 확인가능
//동적 접근 : getValue처럼 코드를 실행하는 단계에서 알수있다. 

const obj = {
    name: "엘리",
    age: 20,
};

//코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용 

function getValue(obj, key) {
    return obj[key]; 
    //key라는 이름을 가지고 있지 않으니까 대괄호를 이용해서 접근할수 있도록 만든다.
    
}

console.log(getValue(obj,"name")); // obj 객체안에 [key] = name 으로 정해진다.

function addKey(obj,key,value) {
    obj[key] = value;  // obj 안에 키값안에 value를 동적으로 넣어준다.
}
addKey(obj, "job", "enginner"); // obj 안에 job:enginner 가 넣어진다.
console.log(obj);

function deleteKey(obj,key) {
    delete obj[key];
}

deleteKey(obj,"job");
console.log(obj);




const myCar = new Object();
myCar.make = "Hyundai";
myCar.model = "Avante";
myCar.year = "1995";

console.log(myCar);

myCar.color; 

console.log(myCar['year']);


const myGoal = new Object();
myGoal.when = "2 years";
myGoal.what = "Buy House";
myGoal.who = "Me and my wife";

console.log(myGoal);

myGoal.money = 500000;

console.log(myGoal);
