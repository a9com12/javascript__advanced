// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log("먹자!");
//     }
//     sleep() {
//         console.log("잔다!");
//     }
// }
// 
// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log("먹자!");
//     }
//     sleep() {
//         console.log("잔다!");
//     }
//     play() {
//         console.log("놀자!");
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log("먹자!");
    }
    sleep() {
        console.log("잔다!");
    }
}

class Tiger extends Animal {}

const tiger = new Tiger("Yellow");
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
    constructor(color, ownerName) { //부모클래스에 인자값도 가져와야함 (color)
       super(color); //상속하고 있는 부모클래스를 가르킴
       this.ownerName = ownerName;
    }
    play() {
       console.log("놀자!");
           }
    // 오버라이딩 overriding
    eat() {
        super.eat(); // 부모의 eat을 호출하고 자식의 eat도 호출한다.
        console.log("강이가 먹는다.");
    }    
}


const dog = new Dog("Red", "Jin");
console.log(dog);
dog.sleep();
dog.eat();
dog.play();