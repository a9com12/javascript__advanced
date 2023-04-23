// promise에서 사용할수 있는 static 함수가 있다.
// reject, resolve, all 등등 다양하다.
// static 함수를 사용하면 Promise를 간단하게 만들수있다. 
function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(chicken) {
    return Promise.resolve(`${chicken} => 🍳`);
}

function getChicken() {
    return Promise.reject(new Error("치킨을 가지고 올수 없음"));
  //  return Promise.resolve(`🪴 => 🥚`);
}

// ; 쓰는것을 주의한다.

getChicken()
.catch(error => {
    console.log(error.name)
    return "🐓";
})
.then((chicken )=> {return fetchEgg(chicken)})
.then((egg) => fryEgg(egg))
.then(friedEgg => console.log(friedEgg))

// 아래는 위에 코드를 심플하게 만든다.

//getChicken()
//.catch(() => "🐓")
// .then(fetchEgg)
// .then(fryEgg)
// .then(console.log);
 

