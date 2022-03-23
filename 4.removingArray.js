// remove elements from the array

const numbers = [10, 20, 30, 40, 50, 60];

// remove last element from the above array.
const last = numbers.pop();
console.log(last);
console.log(numbers);

// remove the first element from the array
const first = numbers.shift();
console.log(first);
console.log(numbers);

// remove the elements from the middle of the array.
console.log(numbers.splice(1, 1));
console.log(numbers);

