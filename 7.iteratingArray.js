// iteration with for of loop
let numbers = [1, 3, 5];

for (let number of numbers)
    console.log(number);


// interation using forEach method 
// numbers.forEach(function(number){
//     console.log(number);
// })

numbers.forEach(number => console.log(number));
numbers.forEach((number, index) => console.log(index, number));

