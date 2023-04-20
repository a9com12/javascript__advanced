// 옵셔널 체이닝 연산자 Optional Chaning Operator
// ES11 에 추가됨 
// ? 요렇게 생김 
// null 또는 undefined을 확인할때 

let item = {price: 1};
// const price = item && item.price;
const price = item?.price; // ? 을 사용해서 간단하게
console.log(price);


let obj = {name: "Dog", owner: {name: "Ellie"}};
// const ownerName = obj && obj.owner && obj.owner.name; // obj 반복 힘듬 ㅜㅜ
// ? 을 사용하면
const ownerName = obj?.owner?.name;
console.log(ownerName);