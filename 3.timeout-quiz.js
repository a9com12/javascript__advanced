// 주어진 seconds (초)가 지나면 callback 함수롤 호출한다.
// 단 , seconds가 0보다 작으면 에러를 던짐.

function runInDelay (callback,seconds) {
    if (!callback) {
        throw new Error("callback함수를 전달 해야함.")
    }
    if ( !seconds || seconds < 0) {
        throw new Error("seconds는 0보다 커야함.")
    }
  setTimeout(callback,seconds * 1000);
}


try {
    runInDelay(()=>{console.log("타이머완료");},2)
} catch (error) {

};

