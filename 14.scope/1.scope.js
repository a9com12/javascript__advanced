// 코드 블럭: { }, if() {}, for () {}, function ( ) {}
// 블럭 외부에서는 블럭 내부의 변수를 참조할수없다.
{
    // 블럭안에서는 접근이 가능
    const a = "a";
    console.log(a);
}

// 블럭안에서는 접근이 불가능 
// console.log(a);
const b = "b";

function print() {
    const message = "Hello World";
    console.log(message);
}
