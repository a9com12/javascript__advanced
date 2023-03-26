// 배열의 함수들 
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지 

const fruits = ["🍎", "🍌", "🍉", "🍊"];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));  // true
console.log(Array.isArray({}));  // false

// 특정한 아이템의 위치를 찾을때 
console.log(fruits.indexOf("🍎")); // 0을 반환

// 배열안에 특정한 아이템이 있는지 체크 

console.log(fruits.includes("🍌")); // true

// 배열 아이템 추가 - 제일뒤 
fruits.push("🥑"); // 배열 자체를 수정 (업데이트)
console.log(fruits);

// 배열 아이템 추가 - 제일앞

fruits.unshift("🍍");
console.log(fruits); // 배열 자체를 수정 
console.log(fruits.length);

console.clear();


// 제거 - 제일 뒤 
// 배열제거 아이템을 제거 하고 제거된 아이템을 리턴해준다.
let lastItem = fruits.pop(); 
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
// 배열제거 아이템을 제거 하고 제거된 아이템을 리턴해준다.
let firstItem = fruits.shift(); 
console.log(fruits);
console.log(firstItem);


// 중간에 추가 또는 삭제
// 배열제거 아이템을 제거 하고 제거된 아이템을 리턴해준다.
const deleted = fruits.splice(1,1);
console.log(fruits); // 배열 자체를 수정 (업데이트)
console.log(deleted);
fruits.splice(1,0, "🍇", "🥝");
console.log(fruits);

// 잘라진 새로운 배열은 만듬 
let newArr = fruits.slice(0,2); // 2제외
console.log(newArr);
console.log(fruits);

newArr = fruits.slice(); // 아무것도 넣지 않으면 전체 반환.
console.log(newArr);


// 여러개의 배열을 붙여줌 

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);


// 순서를 거꾸로 
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1,2,3],
    [4,[5,6]],
];
console.log(arr);
console.log(arr.flat(3)); // 1단계까지만 중첩을 풀어줌. 3단계까지 풀어줄려면 (번호를 넣어줌)
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill("s", 1, 3); // (채울값, 시작, 끝)
console.log(arr);   // fill은 배열 자체를 수정

// 배열을 문자열로 합하기 
let text= arr.join();
console.log(text); // 문자열로 반환
text = arr.join(" | "); // 사이에 문자를 넣을수있음
console.log(text);