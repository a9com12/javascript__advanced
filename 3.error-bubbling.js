// Bubbling up, Propagating 

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