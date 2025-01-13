



Array.prototype.every2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {

        }
    }
}

var courses = [
    {
      name:'Javascript'
      coin: 680,
      isFinish: true,
    },
    {
        name:'PHP'
        coin: 860,
        isFinish: true,
    },
    {
        name:'Ruby'
        coin: 980,
        isFinish: false,
    },
];
var result = courses.every(function(course, index, array) {
    return course.isFinish === true;
});

console.log (result);




