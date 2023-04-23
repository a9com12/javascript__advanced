// 호출하는 순서가 콜스택에 저장된다.
// 자바스크립트 엔진은 기본적으로 동기적으로 실행된다.
// 함수에 오래걸리는 일을 하면 전체적으로 앱이 무거워진다.
function a () {
    return 1;
}
function b () {
    return a() + 1;
}
function c () {
    return b() + 1;
}

const result = c();
console.log(result);