// while(조건) {}
// 조건이 false가 될때까지 { } 코드를 반복 실행

let num = 5;

while(num >= 0) {
    console.log(num);
    num --;
}

let isActivate = false;
let i = 0;
while(isActivate) {
    console.log("아직 살아있다.");
    if (i === 50) {
        break;
    }
    i++;
}

do { //do는 일단 시작하고 조건을 본다.
    console.log("아직 살아있다.");
} while(isActivate);