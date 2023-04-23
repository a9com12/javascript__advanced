// 프로토타입 객체지향 프로그래밍 
function Animal (name, emoji) {
    this.name = name;
    this.emoji = emoji;
}
Animal.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
}
function Dog(name,emoji,owner) {
    Animal.call(this, name, emoji);
    this.owner = owner;
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.play = () => {
    console.log("같이 놀자");
}
function Tiger(name,emoji) {
    Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
    console.log("사냥하자!");
}
const dog1 = new Dog("멍멍", "🐶", "Ellie");

dog1.play();
dog1.printName();

const tiger1 = new Tiger("어흥", "🐯");
tiger1.hunt();
tiger1.printName();

// instaceof 상속도 확인 
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);