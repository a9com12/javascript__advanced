const newSet = new Set([4,5,6]);
console.log(newSet);

console.log(newSet.size);

console.log(newSet.has(4));
console.log(newSet.has(10));
newSet.forEach((item) => console.log(item));

newSet.add(12);
console.log(newSet);
newSet.delete(12);
console.log(newSet);
newSet.clear();
console.log(newSet);