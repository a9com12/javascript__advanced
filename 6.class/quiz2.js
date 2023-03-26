// 정직원과 파트타임직원을 나타 낼수 있는 클래스를 만들어보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
    constructor(name,department,hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee  extends Employee {
    static PAY_RATE = 10000;
    constructor(name,department,hoursPerMonth) {
        super(name,department,hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
}
class PartTimeEmployee  extends Employee {
    static PAY_RATE = 10000;
    constructor(name,department,hoursPerMonth) {
        super(name,department,hoursPerMonth,PartTimeEmployee.PAY_RATE );
    }
}

const ellie = new FullTimeEmployee("엘리", "s/w", 30);
const bob = new PartTimeEmployee("밥", "s/w", 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());


// class Employee {
//     constructor(name,department,workingHour,salaryPerHour) {
//         this.name = name;
//         this.department = department;
//         this.workingHour = workingHour;
//         this.salaryPerHour = salaryPerHour;
//     }
// 
// }
// 
// class FullTime extends Employee {}
// 
// const fullTime = new FullTime("Jin","HR",112,10000);
// 
// class PartTime extends Employee {}
// 
// const partTime = new PartTime("Jihee","F&B",80,8000);
// 
// console.log(fullTime);
// console.log(partTime);
// console.log(fullTime.workingHour * fullTime.salaryPerHour);
// console.log(partTime.workingHour * partTime.salaryPerHour);