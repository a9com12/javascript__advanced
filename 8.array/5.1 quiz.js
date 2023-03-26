// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function change (array,from,to) {
   let changed = Array.from(array);
   for (let i = 0; i < changed.length; i++ ) {
     if (changed[i] === from ) {
        changed[i] = to
     };
   };
   return changed
};

const array =  ['🍌', '🍓', '🍇', '🍓'];
const output = change(array,'🍓','🥝');

console.log(output);


// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function countArray(array,item) {
   let count = 0;
   for( i = 0; i < array.length; i++ ) {
    if (array[i] === item) {
       count++;
    }
   }
   return count;
}
console.log(countArray([ '🍌', '🥝', '🍇', '🥝','🥝' ], '🥝'));


// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]


function combine(arr1,arr2 ) {
    let combinedArray = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2.includes(arr1[i])) {
            combinedArray.push(arr1[i])
        }
        }
        return combinedArray;
    }

const arr1 = ['🍌', '🥝', '🍇'];
const arr2 =  ['🍌', '🍓', '🍇', '🍓'];
const result = combine(arr1, arr2)
console.log(result);
