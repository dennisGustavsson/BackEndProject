import { isMetaProperty } from "typescript";
import { currencyFormatter } from "../Assets/Scripts/CurrencyFormatter";
import { CartItemProp, IShoppingCartContext, useShoppingCart } from "../Contexts/ShoppingCartContext";
import { IProduct } from "../Models/productModels";
import { IShoppingCartItem } from "../Models/shoppingCartModel";

interface Props {
  item: CartItemProp;
}

const ShoppingCartItem: React.FC<Props> = ({ item }) => {

  //from shoppingcartContext, for adding and removal from cart
  const { incrementQuantity, decrementQuantity, removeItem } =
    useShoppingCart() as IShoppingCartContext;
  return (
    <div className='shoppingcart-item'>
      <div className='item-img'>
        <img src={item.product.imageName} alt={item.product.name} />
      </div>
      <div className='item-info'>
        <div className='item-infoName'>{item.product.name}</div>
        <div className='item-infoQuantity'>
          <button onClick={() => decrementQuantity(item)}>-</button>
          <div className='quantity' data-testid>
            {item.quantity}
          </div>
          <button onClick={() => incrementQuantity(item)}>+</button>
        </div>
      </div>
      <div className='item-price'>
        <div>{currencyFormatter(item.product.price * item.quantity)}</div>
        <button
          className='trash'
          onClick={() => removeItem(item.articleNumber)}
        >
          <i className='fa-solid fa-trash'></i>
        </button>
      </div>
    </div>
  );
};
export default ShoppingCartItem;
