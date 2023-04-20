// Bubbling up, Propagating 
// 에러는 최종적으로 호출한 사람까지 전파된다. 무서움 ㄷㄷ;

function a () {
    throw new Error("Error");
}
function b () {
    a();
}

function c () {
    b();
}

try {
    c();
} catch (error) {
    console.log("Catched!");
}
console.log("Done!");