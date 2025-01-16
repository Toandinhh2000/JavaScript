


Varlidator.minLength = function (selector, min) {
return {
    selector: selector,
    test: function (value) {
        return value.length >= min ? underfined : `Vui lòng nhập tối thiểu ${min}`
    }
}
};





