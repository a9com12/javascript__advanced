// 변수를 가져오는것 보다는 getter와 setter를 이용한다.

let count = 0;
export function increase () {
    count++;
    console.log(count);
}

export function getCount() {
    return count;
}


// type module을 지정하면 고유 모듈로 다른 js에 영향을 주지 않는다.
// export를 사용해서 보내고 싶은 기능을 다른 곳을 보내면 
// import를 사용한다.
// export default 는 모듈에서 한번만 사용할수있다.
// 그냥 export를 사용하는경우에는 중괄호 안에 함수이름을 똑같이 넣어야한다.
// 이름을 바꾸고 싶다면 {increase as increase1} 으로 이름을 지정한다.