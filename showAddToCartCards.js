import products from '/api/products.json'; //data from api

import { getCartProductFromLS } from "./getCartProducts";
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { removeProductFromCart } from './removeProductFromCart';
import { incrementDecrement } from './incrementDecrement';
import { updateCartProductTotal } from './updateCartProductTotal';

let cartProducts = getCartProductFromLS(); // data from local storage

let filterProducts = products.filter((curProd) => {

    return cartProducts.some((curElem) => curElem.id === curProd.id)
    // console.log(curProd.id);

})

console.log(filterProducts);

const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, price, stock } = curProd;
        const productClone = document.importNode(templateContainer.content, true);

        const LSActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productPrice').textContent = LSActualData.price;
        productClone.querySelector('.productQuantity').textContent = LSActualData.quantity;

        productClone.querySelector('.stockElement').addEventListener('click', (event) => {
            incrementDecrement(event, id, stock, price);
        })

        productClone.querySelector('.remove-to-cart-button').addEventListener('click', () => {
            removeProductFromCart(id);
        } )


        cartElement.append(productClone)
    })
}








showCartProduct();

updateCartProductTotal();


