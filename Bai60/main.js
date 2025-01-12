



var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    },
];

var isResult = courses.some(function(course, index,array) {
return course.isFinish;
});

console.log(result);

