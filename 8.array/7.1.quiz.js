// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]


// for문을 활용
function newFruits(fruits,from,to) {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === from) {
            fruits[i] = to
        } 
        else {
            fruits[i]
        }
    }
    return fruits;
}

const fruits = ['🍌', '🍓', '🍇', '🍓'];
const result = newFruits(fruits,'🍓','🥝');
console.log(result);


// 고차함수를 활용
function newSecondFruits (fruits2, from, to) {
    return fruits2.map(value => value === from ? to : value);
}

const fruits2 = ['🍌', '🍓', '🍇', '🍓','🍌', '🍓', '🍇', '🍓'];
const result2 = newSecondFruits(fruits2,'🍓','🍌');
console.log(result2);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2


function fruitCount (array, item) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            count++;
        }
    }
    return count++;
}

function count (array, item) {
    return array.reduce((count,value) => {
        if (value === item) {
            count++;
        }
        return count;
    }, 0);
}

function count2 (array, item) {
    return array.filter(value => value === item).length;
}


const fruit3 = [ '🍌', '🥝', '🍇', '🥝' ];
const  fruitItem3 =  '🥝';
const result3 = fruitCount(fruit3, fruitItem3);
console.log(result3);
console.log(count(fruit3,fruitItem3));
console.log(count2(fruit3,fruitItem3));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]


function combied (arr1, arr2) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            newArray.push(arr1[i]);
        }
    }
    return newArray;
}
function newCombied (arr1,arr2) {
    return arr1.filter((item) => arr2.includes(item));
}

const arr1 = ['🍌', '🥝', '🍇'];
const arr2 =  ['🍌', '🍓', '🍇', '🍓'];
const combiedArr = combied (arr1, arr2);
console.log(combiedArr);
const combiedArr1 = newCombied (arr1,arr2);
console.log(combiedArr1);


// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

const result4 = nums.filter((num) => num > 5).reduce((avg,num,index,array) => avg + num / array.length, 0);

console.log(result4);