// finding elements (primitive)

const numbers = [1, 2, 3, 4, 3, 5]; // index [0, 1, 2, 3, 4, 5]

// index of element number 3 in the numbers array
console.log(numbers.indexOf(3)); // returns 2

// index of element number 3 in the numbers array from the end
console.log(numbers.lastIndexOf(3)); // returns 4

// find out if the element present in the array
console.log(numbers.indexOf(4) !== -1); // true
console.log(numbers.includes(4)); // true
console.log(numbers.includes(0)); // false

// finding elements (reference)

const courses = [
    {id: 1, name: 'a' },
    {id: 2, name: 'b' } 
];

console.log(courses.includes({id: 1, name:'a'})); // here the inclues method is invalid
// as the include method doesn't work for reference type. here the address of both the 
// object is different.

// we need to use find method for reference type 
const course = courses.find(function(course){
    return course.name === 'a';
})

console.log(course);
// above method gives a element which is present there in the array but returns
// undefined if the element is not present.

// findIndex
const courseIndex = courses.findIndex(function(course){
    return course.name === 'b';
})

console.log(courseIndex);








