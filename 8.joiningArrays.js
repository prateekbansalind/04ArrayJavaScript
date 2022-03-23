// Join arrays
const numbers = [1, 3, 5, 7];
console.log(numbers); //[1, 3, 5, 7]

const sumNumbers = numbers.join('+');   // join method ask an argument in a string form which is optional.
console.log(sumNumbers); // 1+3+5+7    -> String type output

// string method split usually used along with array join method.
const message = "Hello, My name is Prateek Bansal.";
const parts = message.split(' '); 
console.log(parts);  // ['Hello,', 'My', 'name', 'is', 'Prateek', 'Bansal.']

const newMessage = parts.join('-');
console.log(newMessage); // Hello,-My-name-is-Prateek-Bansal.

const url = 'https://rahulshettyacademy.com/getCourse.php?code=4%2F0AX4XfWgDz7cvt_jJ_x9hA3M1_3xp06OpuIHn07GjonjLsArQ5hzJ_Qyti0xukEsBYArEuA&scope=email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=none';

const urlParts = url.split('&');
console.log(urlParts);

// ['https://rahulshettyacademy.com/getCourse.php?code=…3M1_3xp06OpuIHn07GjonjLsArQ5hzJ_Qyti0xukEsBYArEuA', 'scope=email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid', 'authuser=0', 'prompt=none']

