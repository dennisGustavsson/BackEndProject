import { Key } from "react";
import { useShoppingCart } from "../Contexts/ShoppingCartContext";
import ShoppingCartItem from "./ShoppingCartItem";
const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <>
      <div
        className='shoppingcart offcanvas offcanvas-end'
        tabIndex={-1}
        id='shoppingCart'
        aria-labelledby='shoppingCartLabel'
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='shoppingCartLabel'>
            <i className='fa-regular fa-shopping-bag'></i> Your shopping cart:
          </h5>
          <button
            type='button'
            className='btn-close-white btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          {cartItems.map((item: { articleNumber: Key | null | undefined; }) => (
            <ShoppingCartItem key={item.articleNumber} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
