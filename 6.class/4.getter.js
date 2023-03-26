// 접근자 프로퍼티 (Accessor Property)
class Student {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value) {
        console.log("set", value);
    }
}

const student = new Student ("수지", "김"); 
console.log(student.firstName);
console.log(student.fullName);
student.fullName = "김철수";

//get을 함수앞에 붙여주면 속성에 접근하는것처럼 보여준다.
// set 새로 인자에 할당을 할때 추가로 출력되게 보여준다.