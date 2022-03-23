// slice and combine arrays

let first = [ 1, 2, 3 ];
let second = [ 4, 5, 6 ];

let combined = first.concat(second);
console.log(combined);

// slice arrays
let slice = combined.slice(1, 4);
console.log(slice);


// spread operator 
let combinedArray = [...first, 'a', ...second, 'b'];
console.log(combinedArray);

let copy = [...combinedArray];
console.log(copy);



