const numbers = [1, 2, 3, 4, 5];
console.log(numbers)

// reduce
const res = numbers.reduce((sum, val) => sum + val, 0);
console.log(res); // 15