// const multiple = {
//    [Symbol.iterator]() {
//      const max = 10;
//      let num = 0;
//      return {
//          next() {
//              return {value: num++ * 2 , done: num > max };
//          },
//      };
//    },
//  };


// 함수에 *을붙이는 순간 generator가 된다.
function* multipleGenerator() {
    for(let i = 0; i < 10; i++) {
        console.log(i);
        yield i ** 2;   // yield는 결과값을 하나하나씩 리턴해줌
      
    }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value,next.done);
//multiple.return(); // 제어문을 끝냄.
//multiple.throw("error!"); // 에러를 보낼수있음.
next = multiple.next();


