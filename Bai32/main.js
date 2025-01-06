



var User = function(firstName, lastName, avatar) {
this.firstName = firstName;
this.lastName = lastName;
this.avatar = avatar;

this.getName = function() {
    return`${this.firstName} ${this.lastName}`;
}
}

var author = new User('Toàn', 'Đinh', 'avatar');
var User = new User('Công', 'Minh', 'avatar');

author.title = 'chia sẻ dạo tại f8';
User.comment = 'Liệu có khóa học asp.net không ad^^';

console.log(author);
console.log(User);

