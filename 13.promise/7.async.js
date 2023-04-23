function getBanana() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("🍌");
        }, 1000);
    });
}
function getApple() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("🍎");
        }, 3000);
    });
}
function getOrange() {
    return Promise.reject(new Error(`no orange`));
}
// 바나나 와 사과를 같이 가지고 오기 
// async 사용하면 비동기적인 코드를 동기적으로 사용할수있다.
// await로 기다렸다가 코드를 사용한다.

async function fetchFruits() {
    const banana = await getBanana();
    const apple = await getApple();
    return [banana, apple];
}

fetchFruits() //
.then(fruits => console.log(fruits))

// function fetchFruits() {
//     return getBanana() //
//     .then(banana => 
//         getApple()//
//           .then(apple =>[banana,apple])
//     )
// }
// 
// fetchFruits() //
// .then(fruits => console.log(fruits))