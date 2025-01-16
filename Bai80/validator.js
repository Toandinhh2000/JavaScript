

function validator(options) {
    function validate(inputElement, rule) {
        var errorElement = inputElement.querySelector('.form-message');
   if (errorMessage) {
    errorElement.innerText = errorMessage;
    inputElement.parentElement.classList.add('invalid');

   } else {
    errorElement.innerText = '';
    inputElement.parentElenment.classList.remove('invalidinvalid');
   }
}
}











