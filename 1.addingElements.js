// adding elements : arrays

const numbers = [3, 4];
console.log(numbers);
// const numbers = []; // in const we can edit the const variable like adding or removing elements 
// but we can not refine it. 

// ending methods to an array.
numbers.push(5, 6);
console.log(numbers);

// number in the beginning
numbers.unshift(1, 2);
console.log(numbers);

// numbers in the middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);