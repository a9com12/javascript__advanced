//Iterable 하다는건! 순회가 가능하다는 얘기이다.
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알수있다.
// 순회가 가능하면 무엇을 할수 있나? for..of,spreads 
// 배열은 순회가 가능하다. 

const array = [1,2,3]; 
for (const item of array.entries()) {
    console.log(item);
}

const arraySecond = [5,6,7];
for (const item of arraySecond.entries()) {
    console.log(item);
}


const obj = {0:1, 1:2}; // 객체는 순회가 가능하지 않는다.
for (const item in obj) { // value를 제외한 key를 출력 
    console.log(item);
}


const iterator = array.values();
while(true) {
    const item = iterator.next();
    if(item.done) break;
    console.log(item.value);
}
