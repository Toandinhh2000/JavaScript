



var courses = [
    {
        name: 'Javascript',
        coin: 680,
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby'
        coin: 980
    },
];

var filterCourses = courses.filter(function(course, index, array ) {
return course.coin > 700;
})

console.log(filterCourses);

