// 퀴즈 !
// 1. 문자열의 모든 캐릭터를 하나씩 출력
const text = "Hello World!";

for(let i = 0; i < text.length; i++) {
    console.log(text[i]);
}


//2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = "user1, user2, user3, user4";

console.log(ids.split(", "));

//3. 1초에 한번씩 시계를 (날짜포함) 출력
// setInterval 사용


// function clock () {
//     const date = new Date();
//     const day = String(date.getDay());
//     const hours = String(date.getHours());
//     const min = String(date.getMinutes());
//     const sec = String(date.getSeconds());
//     console.log(`${day}:${hours}:${min}:${sec}`);
//    
// }
// 
// setInterval(clock, 1000);

// setInterval( () =>  {
//     const date = new Date();
//     const hours = String(date.getHours()).padStart(2, "0");
//     const min = String(date.getMinutes()).padStart(2, "0");
//     const sec = String(date.getSeconds()).padStart(2, "0");
//     console.log(`${hours}:${min}:${sec}`);
//     
// }, 1000)

