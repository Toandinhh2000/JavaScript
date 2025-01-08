var course = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100
},
{
        id: 2,
        name: 'HTML , CSS',
        coin: 200
},
{
        id: 3,
        name: 'Ruby',
        coin: 220
},
{
        id: 4,
        name: 'PHP',
        coin: 200
},
{
        id: 5,
        name: 'ReactJS',
        coin: 480
},
];

var totalCoin = 0;

for (var course of courses) {
    totalCoin += course.coin;
}

console.log(totalCoin);


