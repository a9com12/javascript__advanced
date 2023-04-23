// 엄격 모드 
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드

"use strict";

function add(x) {
    var a = 2;
    var b = a + x;
    console.log(this);
}
add(1);

const array = [1,2,3];
for (const num of array) {
    console.log(num);
}