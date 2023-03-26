// static 정적 프로퍼티, 메서드 
// class 자체에는 데이터가 없기 때문에 데이터를 호출할수없다. 
// class 에서는 class에서 생성된 인스턴스를 통해서 데이터를 호출 해야한다.
class Fruit {
    static MAX_FRUITS = 4;
    // 생성자 : new 키워드로 객체를 생성할때 호출되는 함수 
    constructor(name,emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    // 클래스 레벨의 메서드 
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this를 참조 할수없다.
      return new Fruit ("banana", "🍌");
    }
    static makeRandomFruitSecond() {
      return new Fruit ("Watermelon", "🍉");
    }
    // 인스턴트 레벨의 메서드
    display = () => {
      console.log(`${this.name}: ${this.emoji}`);
    };
}

const banana = Fruit.makeRandomFruit();
const watermelon = Fruit.makeRandomFruitSecond();
console.log(banana);
console.log(watermelon);
console.log(Fruit.MAX_FRUITS);

// apple은 Fruit의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
// orange는 Fruit의 인스턴스이다.
const orange = new Fruit ("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

Math.pow();
Number.isFinite(1);