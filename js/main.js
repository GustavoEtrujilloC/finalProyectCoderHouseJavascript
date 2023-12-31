/* fetch Api local for games */

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let qtyBtn = document.querySelector('.input__number');

let qtyBtnDefault = 0;

plusBtn.addEventListener('click',() => {
    qtyBtnDefault++;
    qtyBtn.value = qtyBtnDefault
});

minusBtn.addEventListener('click',() => {
    qtyBtnDefault--;
    if (qtyBtnDefault <= 0) {
        qtyBtnDefault = 0;
    }
    qtyBtn.value = qtyBtnDefault
});


/* Function to add items to menu cart and modal shopping cart */
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header-cart__cart--notification');
let lastValue = parseInt(cartNotification.innerText);
let cartModalQty = document.querySelector('.cart-modal__quantity-number');
let cartModalPrice = document.querySelector('.cart-modal__price-number');
let cartModalTotal = document.querySelector('.cart-modal__total-number');
    
    


addToCartBtn.addEventListener('click',() => {
    
    lastValue = qtyBtnDefault + lastValue;       
    cartModalQty.innerText = lastValue;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    cartModalTotal.innerText = (cartModalQty.innerText * cartModalPrice.innerText); 
    

})

/* Funtion to show modal shopping cart */

let shoppingCartMenu = document.querySelector('.header-cart__cartImg');
let modalShoppingCart = document.querySelector('.cart-modal');

shoppingCartMenu.addEventListener('click', () => {
    /* modalShoppingCart.style.display = 'block'; */
    modalShoppingCart.classList.toggle('show');


})

/* Delete the cart content */

let deleteCartContentBtn = document.querySelector('.cart-modal__delete');
let cartDeleteContainer = document.querySelector('.cart-modal__checkout-container');
let titleDeleteContainer = document.querySelector('.cart-modal__product-name');
let containerCartEmpty = document.querySelector('.cart-modal__product-container');
let cartImg = document.querySelector('.cart-modal__imgCart');

deleteCartContentBtn.addEventListener('click', () => {

    
    cartModalQty.innerText = 0;
    
    cartModalTotal.innerText = 0;
    lastValue = 0;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'none';
       
});







/* change images of the gallery */

