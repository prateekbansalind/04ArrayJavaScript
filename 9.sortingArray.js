// sorting array

const numbers = [2, 4, 3, 1];
console.log(numbers); // [2, 4, 3, 1]

// sorting array
const sorted = numbers.sort(); 
console.log(sorted); // [1, 2, 3, 4]

// reverse array
const reverseArray = sorted.reverse();
console.log(reverseArray); // [4, 3, 2, 1]

// sort an object array
const courses = [
    { id: 1, name:'Node.js'},
    { id: 2, name:'javascript.js'}
];



// 0: {id: 1, name: 'Node.js'}
// 1: {id: 2, name: 'Javascript.js'}

courses.sort(function(a, b){

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;

});

console.log(courses);

// 0: {id: 2, name: 'Javascript.js'}
// 1: {id: 1, name: 'Node.js'}

// if you change the alphabet from uppercase to lowercase or vice versa.
// then it follows ASCII standard