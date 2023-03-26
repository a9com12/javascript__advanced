// [Symbol.interator](): Interator{next(): {value, done}};
// 0 부터 10 이하까지 숫자의 2배를 순회하는 반복자 만들기
// 0, 1,2,3....,9
// 0, 2,4,6....,18

function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
          next() {
              return {value: callback(num++) , done: num > maxValue };
          },
      };
    },
  };
  }

const multiple = makeIterable(0,20,(num)=> num * 2);
for(const num of multiple) {
    console.log(num);
}

function makeNewIterable(firstValue, lastValue, callback) {
  return {
    [Symbol.iterator] () {
      let num = firstValue;
      return {
        next () {
          return {value: callback(num++), done: num > lastValue};
        },
      };
    },
  };9
}

const functionMultiple = makeNewIterable(0,20,(num)=> num *3);
for (const num of functionMultiple) {
  console.log(num);
}