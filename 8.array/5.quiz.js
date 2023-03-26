// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

let fruits =  ['🍌', '🍓', '🍇', '🍓'];
fruits[1] = "🥝";
fruits[3] = "🥝";


console.log(fruits);

let count = 0;
for(let i = 0; i < fruits.length; i++) {
    if(fruits[i] === "🥝") {
        count++;
    }
}
console.log(count);

let fruitArr1 = ['🍌', '🥝', '🍇'];
let fruitArr2 = ['🍌', '🍓', '🍇', '🍓'];

let interSection = fruitArr1.filter( same => fruitArr2.includes(same));

console.log(interSection);

// 정답해설 1

function replace(array, from, to ) {
 const replaced = Array.from(array);
 for(let i = 0; i < replaced.length; i++) {
    if(replaced[i] === from) {
        replaced[i] = to;
    }
 }
 return replaced;
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array,'🍓','🥝' );
console.log(result)

//정답해설2 

function count2(array, item) {
    let counter = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            counter++;
        }
    }
    return counter;
}

console.log(count2( [ '🍌', '🥝', '🍇', '🥝' ], '🥝'));


//정답해설3 

function match(input,search) {
    const result = [];
    for(let i = 0; i < input.length; i ++ ) {
        if(search.includes(input[i])) {
            result.push(input[i])
        }
    }
    return result;
}

console.log(match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));