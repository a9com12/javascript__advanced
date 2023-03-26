// 접근제어자 - 캡슐화 수정할수없도록  #를 key앞에 붙인다.
// private(#), public(기본값), protected

class Fruit {
    #name;
    #emoji;
    #type = "과일";
    constructor(name,emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }
    display = () => {
      console.log(`${this.#name}: ${this.#emoji}`);
    };
}

const apple = new Fruit ("apple", "🍎");
apple.#name = "orange";// #field는 외부에서 접근이 불가능
console.log(apple);