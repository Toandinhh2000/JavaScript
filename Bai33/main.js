
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
this.lastName = lastName;
this.avatar = avatar;
this.getName = function() {
    return `${this.firstName}, ${this.lastName}`;
}
}

User.prototype.className = 'f8';

var User = new User('Toàn', 'Đinh', 'avatar 1');
var User = new User('Toàn', 'Đinh', 'avatar 2');

console.log(User.className);
console.log(User2);


