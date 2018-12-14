var addInefficientClass = function () {
    $(this).parents('.inefficient-item').toggleClass('active').siblings().removeClass("active");;
}
$(document).on('click', '.js-add-inefficient-class', addInefficientClass);