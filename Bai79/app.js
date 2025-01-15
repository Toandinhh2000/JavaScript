


function viec1() {
    console.log('Viec 1');
}
function viec2() {
    console.log('Viec 2 ');
}

btn.addEvenListener('Click', viec1);
btn.addEvenListener('Click', viec2);

setTimeout(function () {
    btn.removeEventListener('Click', viec1)
}, 3000);







