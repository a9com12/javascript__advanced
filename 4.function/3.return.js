// return 을 명시적으로 하지 않으면 자동으로 underfined이 반환된다.
function add(a,b) {
   // return a + b;
}

const result = add(1,2);
console.log(result);

function print(num) {
    if (num < 0 ) {
        return; //함수를 종료함.
    }
    console.log(num);
}
print(12);
print(-12);

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료한다.
