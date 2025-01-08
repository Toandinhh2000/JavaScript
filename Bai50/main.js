
var course = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
},
{
        id: 2,
        name: 'HTML , CSS',
        coin: 1
},
{
        id: 3,
        name: 'Ruby',
        coin: 1
},
{
        id: 4,
        name: 'PHP',
        coin: 4
},
{
        id: 5,
        name: 'ReactJS',
        coin: 5
},
{
        id: 6,
        name: 'Ruby',
        coin: 10
},
{
        id: 7,
        name: 'Ruby',
        coin: 12
},
];

function courseHandler(course, index), 
   // console.log(course);
   return `<h2>${course.name}</h2>`

var newCourse = course.map(courseHandler);

console.log(newCourse.join(''));
