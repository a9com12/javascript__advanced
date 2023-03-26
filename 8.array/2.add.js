const fruit = ["🍎", "🍌", "🍉", "🍊"];

// 배열 아이템을 참조하는 방법.

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit.length); // 배열안에 몇개의 아이템이 있는지 확인

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// 추가 삭제  좋지 않는 방법.

// const fruit = ["🍎", "🍌", "🍉", "🍊"];

fruit[4] = '🍓'; // 인덱스 번호를 잘못 넣으면 덮어씌어짐.
console.log(fruit);

fruit[fruit.length] = "🍇"; //length를 넣으면 배열의 끝에 아이템을 추가.

console.log(fruit);

delete fruit[1];  // delete를 써서 아이템을 빼는것 좋지않다.
console.log(fruit); // 지워도 자리가 남아있음.

