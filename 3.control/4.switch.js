// 조건문 Conditional Statement 
// Switch
// if esle if else ... else 

// 정해진 범위안에 값에 대해 특정한 일을 해야 하는 경우 

let day = 3;

switch(day) {
  case 0:
      dayName = "Monday";
      break;
  case 1:
      dayName = "Tuesday";
      break;
  case 2:
      dayName = "Wendesday";
      break;
  case 3:
       dayName = "Thursday";
      break;
  case 4:
       dayName = "Friday";
       break;
  case 5:
       dayName = "Saturday";
       break;
  case 6:
       dayName = "Sunday";
       break;     
}

console.log(dayName);



let fruit = 8;

switch(fruit) {
  case 0: 
    fruitName = "Apple";
    break;
  case 1: 
    fruitName = "Orange";
    break;
  case 2: 
    fruitName = "Potato";
    break;
  case 3: 
    fruitName = "Tomato";
    break;
  case 4: 
    fruitName = "Strawberry";
    break;
  case 5: 
    fruitName = "Pineapple";
    break;
  case 6: 
    fruitName = "Watermelon";
    break;
  case 7: 
    fruitName = "mango";
    break;
  default: 
    fruitName = "No fruit"; 
}

console.log(fruitName);


let condition = "bad";
let text;
  switch (condition) {
    case "okay":
    case "good":
        text = "Good!";
        break;
    case "bad":
        text = "Bad!";
        break;    
   

  }

  console.log(text);
