// Suppose, you have an array of students:

// let students = [{
//   name: 'Anna',
//   languages: ['English', 'Ukrainian'],
//   age: 21
// }, {
//   name: 'Bob',
//   languages: ['Polish', 'Spanish'], 
//   age: 26 
// }, { 
//   name: 'Alice', 
//   languages: ['Italian', 'German'], 
//   age: 18 
// }]


// Please, implement a function getLanguages. The function takes an array of students as a first parameter and a condition on a student (function). getLanguages should return an array of languages from students that satisfy a condition.

// Try to use reduce and not use loops to solve this task. 

// For example:
// Тест	Result
// let students = [{
//   name: 'Anna',
//   languages: ['English', 'Ukrainian'],
//   age: 21
// }, {
//   name: 'Bob',
//   languages: ['Polish', 'Spanish'],
//   age: 26
// }, {
//   name: 'Alice',
//   languages: ['Italian', 'German'],
//   age: 18
// }];
// console.log(getLanguages(students));
// [ 'English', 'Ukrainian', 'Polish', 'Spanish', 'Italian', 'German' ]


function getLanguages(students, fun){
    return students.reduce((result, element) => {
        let tmp = (typeof fun === 'function' ? fun(element) : true) ? element.languages : [];
        return result.concat(tmp);
    }, []);
}