// arrow functions 

const courses = [
    {id: 0, courseName: 'Selenium'},
    {id: 1, courseName: 'Cypress'},
    {id: 1, courseName: 'Playwright'},
    {id: 1, courseName: 'Postman'},
];

const course = courses.find((course) => course.courseName === 'Cypress');
console.log(course);

const courseIndex = courses.findIndex((course) => course.courseName === 'Cypress');
console.log(courseIndex);
