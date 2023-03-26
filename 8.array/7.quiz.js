// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

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

   const fruits = ['🍌', '🍓', '🍇', '🍓'];
   const fruitsResult = fruits.map( item => {
      if ( item === '🍓' ) {
        return item = '🥝' 
      } else {
        return item; 
      }
   });

   console.log(fruitsResult);

   // 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

   
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
   

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

   
   //정답해설3 
   
   function match(input,search) {
       return input.filter(item => search.includes(item));
       const result = [];
       for(let i = 0; i < input.length; i ++ ) {
           if(search.includes(input[i])) {
               result.push(input[i])
           }
       }
       return result;
   }
   
   console.log(match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));

   let arr1 = ['🍌', '🥝', '🍇']
   let arr2 = ['🍌', '🍓', '🍇', '🍓']
   let interSection = arr1.filter(item => arr2.includes(item))
   console.log(interSection);


// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums //
.filter((num) => num > 5).reduce((avg, num,_,array) => avg + num / array.length, 0)
console.log(result2);