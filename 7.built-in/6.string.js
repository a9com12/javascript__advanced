const textObj = new String("Hello World");
const text = "Hello World!";

console.log(textObj);
console.log(text);

// 각각의 문자를 출력
console.log(text.substring());
console.log(text[0]);
console.log(text.charAt(2));
console.log(text.charAt(0));

// 문자의 길이를 출력
console.log(text.length);

// 문자가 몇번째에 있는지 확인
console.log(text.indexOf("H"));

// 문자가 몇번째에 있는지 뒤부터 확인
console.log(text.lastIndexOf("o"));

// 문자가 포함되어있는지 boolean 값으로 확인 
console.log(text.includes("H"));

// 문자가 시작하는지 아닌지 확인 

console.log(text.startsWith("He"));
console.log(text.endsWith("!"));


// 문자를 대문자로 바꿔서 출력
console.log(text.toUpperCase());

// 문자를 소문자로 바꿔서 출력
console.log(text.toLowerCase());

// 특정한 부분의 문자만 출력
console.log(text.substring(0,2));

//특정한 부분부터 잘라내서 출력
console.log(text.slice(2));

// 뒷부터 잘라내서 출력
console.log(text.slice(-2));

// 공백제거 
const space = "    space.  ";
console.log(space);
console.log(space.trim());

// 스페이스별로 나누고 싶다면

const longText = "Get to the point";
console.log(longText.split(" "));
console.log(longText.split(" ", 2));
console.log(longText.split(", ", 2));

