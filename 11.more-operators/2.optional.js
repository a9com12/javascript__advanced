// 옵셔널 체이닝 연산자 Optional Chainging Operator 
// ES11 (ECmaScript 2020)
// ?. 이렇게 생겼다.

let item = {price: 1};
const price = item?.price;
console.log(price);



let obj = {name: "dog", owner: {name:"ellie"}};
function printName(obj) {
const ownerName = obj?.owner?.name;
console.log(ownerName);

}

printName(obj);
printName(obj);
