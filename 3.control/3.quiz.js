let num = 2;
// num의숫자가 짝수이면 👍 아니면 👎

if(num % 2 === 0) {
    console.log("👍");
} else {
    console.log("👎");
};

// ternary 

let number = num % 2 === 0 ? "👍" : "👎";

console.log(number);