// every() - give boolean result based on the elements in the array. 

const numbers = [1, 3, 5, 6];
const allPositives = numbers.every(value => value>=0); 
console.log(allPositives); // true

const anotherNumbers = [1, 2, -3, 4];
const allPositive2 = anotherNumbers.every(value => value>=0);
console.log(allPositive2); // false



// some() - return true if any of the elments in the array is positive

const nums = [-1, 3, -3, 2];
console.log(nums.some(value => value>=0)); // true

const anotherNums = [-1, -3, -3, -2];
console.log(anotherNums.some(value => value>=0)); // false


