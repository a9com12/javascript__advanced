// [Symbol.interator](): Interator{next(): {value, done}};
// 0 부터 10 이하까지 숫자의 2배를 순회하는 반복자 만들기
// 0, 1,2,3....,9
// 0, 2,4,6....,18

const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
        next() {
            return {value: num++ * 2 , done: num > max };
        },
    };
  },
};

for(const num of multiple) {
    console.log(num);
}

const triple = {
  [Symbol.iterator]() {
    const max = 20;
    let num1 = 0;
    return {
      next () {
        return {value:num1++  * 3, done: num1 > max};
      },
    };
  },
};

for (const num1 of triple) {
  console.log(num1);
}