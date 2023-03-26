// 구조 분해 할당 Destructuring Assignment 
// 데이터 그룹화를 쉽게 만들수 있다.


const fruits = ["🍏","🍋","🥝", "🍅"];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1,2,9]; // 변수할당 
const [x,y,z = 0] = point;  // 구조분해 
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
    return ["apple", "🍎"]; 
}

const [title,emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = {name: "Ellie", age: 20, job: "s/w enginner"};
function display({name,age,job}) {
    console.log("name",name);
    console.log("age", age);
    console.log("job", job);
}

console.log(ellie);


const {name, age, job: occupation, pet = "dog"} = ellie;

console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);



const prop = {
    name: 'Button',
    styles: {
      size: 20,
      color: 'black',
    },
  };
  
  function changeColor({styles: {color}}) {
    console.log(color);
  }

  changeColor(prop);