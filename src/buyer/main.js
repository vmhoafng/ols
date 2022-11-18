// Cart
let cartShopping = document.querySelector('#cart-shopping')
let cart = document.querySelector('.cart')
let cartClose = document.querySelector('#cart-close')
// Open Cart
cartShopping.onclick = () => {
    cart.classList.add("active")
};
// Close Cart
cartClose.onclick = () => {
    cart.classList.remove("active")
};