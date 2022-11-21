import { NavLink } from "react-router-dom";
import { currencyFormatter } from "../Assets/Scripts/CurrencyFormatter";
import { useShoppingCart } from "../Contexts/ShoppingCartContext";
import { IProduct } from "../Models/productModel";

interface Item {
  item: IProduct
}

const ProductCard: React.FC<Item> = ({ item }) => {
  //adds a product to shoppingcart
  const { incrementQuantity }:any = useShoppingCart();
  //star rating variable
  const ratingAmount = item.rating;

  return (
    <>
      <div className='product-grid'>
        <div className='product-card'>
          <div className='product-img'>
            <img src={item.imageName} alt={item.name} />
            <div className='card-menu'>
              <NavLink className='menu-icon' to='/wishlist'>
                <i className='fa-regular fa-heart'></i>
              </NavLink>
              <NavLink className='menu-icon' to='/compare'>
                <i className='fa-regular fa-code-compare'></i>
              </NavLink>
              <NavLink
                onClick={() =>
                  incrementQuantity({
                    articleNumber: item.articleNumber,
                    product: item,
                  })
                }
                className='menu-icon'
                to='/'
              >
                <i className='fa-regular fa-shopping-bag'></i>
              </NavLink>
            </div>
            <NavLink
              to={`/products/${item.articleNumber
                .toLowerCase()
                .replace(/\s/g, "-")}`}
              className='btn-theme'
            >
              Quick view
            </NavLink>
          </div>

          <div className='product-info'>
            <div className='category-title'>{item.category}</div>
            <h4>{item.name}</h4>
            <div className='rating'>
              {/* used this :
                https://blog.logrocket.com/build-a-half-star-rating-component-in-react-from-scratch/ */}
              {[...new Array(ratingAmount)].map((arr, index) => {
                return index < ratingAmount ? (
                  <i className='fa-solid fa-star' key={index}></i>
                ) : null;
              })}
            </div>
            <div className='old-price'></div>
            <div className='new-price'>{currencyFormatter(item.price)}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
