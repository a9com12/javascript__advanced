// 주석 Comments
// 한줄  짜리 주석을 작성할때 쓴다.
// TODO(ellie): something needs to be done

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜 (WHY) 와 어떻게 (HOW)를 설명하는것이 좋다.
 * (단, 정말 필요한 경우에만)
 */

// 외부에서 많이 쓰이는 함수 API 인경우 JSDoc을 사용하는 것이 좋다.

/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns  a 와 b를 더한값
 */
function add(a,b) {
    return a + b;
}

