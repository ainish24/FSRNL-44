const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("\nArray Elements!");
console.log(numbers);
numbers.push(25);
console.log("\nArray Elements!");
console.log(numbers);
numbers.pop();
console.log("\nArray Elements!");
console.log(numbers);

const ind= numbers.indexOf(22);
if (ind!==-1){
    console.log(`Index of 7 is ${ind}`);
}
else{
    console.log("Element not found!");
}