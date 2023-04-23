// 자식 변수는 부모 변수를 참조 할수있다.
{
    const x = 1;
    {
        const y = 2;
        console.log(x);
    }
    console.log(x);
    // console.log(y);
}


const text = "global"; // 전역변수, 전역 스코프라고함.
{
   //  const text = "inside block1"; // 지역변수, 지역 스코프라고함
   //  자식 변수는 제일 근접한 부모 변수먼저 접근한다.
    {
    console.log(text);
    }
}

