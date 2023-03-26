// const apple = {
//     name: "apple",
//     display: function() {
//         console.log(`${this.name}: 🍎`);
//     },
// };
// 
// 
// const orange = {
//     name: "orange",
//     display: function() {
//         console.log(`${this.name}: 🍊`);
//     },
// };

// 생성자 함수  (제일앞글자는 대문자) 붕어빵 틀이라고 보면됨.

function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
   // return this; // 생략가능
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit ("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);


function Ikea (name,furnitrue) {
    this.name = name;
    this.furnitrue = furnitrue;
    this.display = () => {
        console.log(`${this.name}:${this.furnitrue} `);
    }
}

const table = new Ikea ("Wooden Table", "4 guest table");
const sofa = new Ikea ("Fabric Sofa", "4 guests sofa");

console.log(table);
console.log(sofa);