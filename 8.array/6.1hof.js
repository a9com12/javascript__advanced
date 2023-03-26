const faces = ["😀","😅","😍","🥹","😎"];
for (let i = 0; i < faces.length; i++) {
    console.log(faces[i]);
};

faces.forEach(value => console.log(value));

const user1 = {job:"warrior", level: 10};
const user2 = {job:"magician", level: 8};
const user3 = {job:"paladin", level: 9};
const user4 = {job:"thief", level: 9};
const loggedUser = [user1, user2, user3, user4];

let result1 = loggedUser.find((value) => value.job === "warrior");
console.log(result1);

let result2 = loggedUser.find((value) => value.level === 8);
console.log(result2);

let result3 = loggedUser.findIndex((value) => value.level === 10);
console.log(result3);

let result4 = loggedUser.every((value) => value.name === "paladin");

console.log(result4);

let result5 = loggedUser.filter((value) => value.level === 9);

console.log(result5);

const newFaces = ["😀","😅","😍","🥹","😎","😇","🤩","🥳"];
let smileFaces = newFaces.map(value => "😀");
console.log(smileFaces);

const nums = [1,2,3,4,5,6,12,23,32,23,14,12];

let result = nums.filter((value) => value === 12);
console.log(result);

result = nums.flatMap(value => [1,2,3]);
console.log(result);

result = ["Jin", "Coding"].flatMap(text => text.split(""));
console.log(result);

const texts = ["my", "name", "is", "jin"];
texts.sort();
console.log(texts);