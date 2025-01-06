


var emailKey = 'email';

var myInfor = {
    Name: 'Toan Dinh',
    age: 24,
    address: 'Ninh Binh , VN'
    emailKey: 'toandinhnb135@gmail.com',
    phone: '0975386035'
    getName: function() {
        return this.Name;
    }
};

delete myInfor.age;
console.log(myInfor.getName);


