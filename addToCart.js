import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();
// to add the data into local storage

export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);

    let quantity = currentProdElem.querySelector('.productQuantity').innerText;

    let price = currentProdElem.querySelector('.productPrice').innerText;

    price = price.replace('$', '');

    let existingProd = arrLocalStorageProduct.find(
        (curProd) => curProd.id === id
      );

    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = (price * quantity);
        let updatedCart = { id, quantity, price };
    
        updatedCart = arrLocalStorageProduct.map((curProd) => {
          return curProd.id === id ? updatedCart : curProd;
        });
        console.log(updatedCart);
    
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

        showToast('add', id)
        
      }
    

    if (existingProd) {
        
        return false;
    }


    price = Number(price * quantity)

    quantity = Number(quantity)


    arrLocalStorageProduct.push({ id, price, quantity });
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct))

    //    update cart value

    updateCartValue(arrLocalStorageProduct);

    showToast('add', id)



};