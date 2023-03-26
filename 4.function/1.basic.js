//example 1

function sum (a,b) {
    return a + b;
};
console.log(sum(4,2));

//example 2 

let lastName = "김";
let firstName = "지수";
console.log(fullName(firstName,lastName));


let lastName2 = "박";
let firstName2 = "철수";
console.log(fullName(firstName2,lastName2));


function fullName(firstName,lastName) {
    return `${firstName}${lastName}`;
};

//함수는 재사용성을 높여주고 유지보수하는것에 쉽다.