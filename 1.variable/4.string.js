let string = "Hi";
string = `안녕`;
console.log(string);


string = "안녕!\n엘리야!\t\t내 이름은\\\u09AC";

console.log(string);


let id = "elie";
let greetings = "Hi, " + "My name is " + id + "\n have a good day!";
console.log(greetings);

// 템플릿 리터럴(Template Liternal) <-- + 를 사용하는것보다 훨씬 편하다.
greetings = `Hi, ${id} have a good day`;
console.log(greetings);