// 삼항 조건 연산자 Ternary Oerpator 
// 조건식 ? 참인경우 : 거짓인경우 

let fruit = "apple";
if (fruit === "apple") {
    console.log("🍎");
    let a = 1; 
    console.log(a);
} else if (fruit === "orange"){
    console.log("🍊");
}
 else {
    console.log("😀");
 }

 fruit === "apple" ? console.log("🍎") : console.log("🍊");

 let emoji = fruit === "apple" ? "🍎" : "🍊";
 console.log(emoji);

 let uni = "wa";

let university = uni === "curtin" ? "good" : "bad" ;

console.log(university);
