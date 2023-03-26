// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 😆 (최신문법)

class Fruit {
    // 생성자 : new 키워드로 객체를 생성할때 호출되는 함수 
    constructor(name,emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
      console.log(`${this.name}: ${this.emoji}`);
    };
}
// apple은 Fruit의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
// orange는 Fruit의 인스턴스이다.
const orange = new Fruit ("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();


// 연습문제 
class Work {
  constructor(occupation, wage, degree) {
    this.occupation = occupation;
    this.wage = wage;
    this.degree = degree;
  }
  display = () => {
    console.log(`${this.occupation}: ${this.wage} : ${this.degree}`);
  };
};

const nurse = new Work ("Nurse", 75000, "bacholer");
const lawyer = new Work ("Lawyer", 150000, "bacholer");
const teacher = new Work ("Teacher", 65000, "bacholer");


console.log(nurse);
console.log(lawyer);
console.log(teacher);
nurse.display();
lawyer.display();
teacher.display();

console.log(lawyer.wage);