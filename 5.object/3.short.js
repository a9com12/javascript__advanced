// key 값과 value값이 같다면 축약가능하다.
const x = 0;
const y = 0;
const coordinate = {x,y}   //{x:x, y: y};

console.log(coordinate);

function makeObj(name,age) {
    return {
        name,
        age,
    };
};

