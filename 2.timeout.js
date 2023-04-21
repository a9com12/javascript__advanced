// setTimeout 에서 콜백함수는 test queue 에 보관되어  3초가 끝나면 
// 다시 코드로 불러서 실행하기 때문에 2 가 제일 늦게 나온다.

function execute() {
    console.log("1");
    setTimeout(()=> {
        console.log(2);
    }, 3000)
    console.log(3);
}

execute();