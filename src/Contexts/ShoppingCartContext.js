import ShoppingCart from "../Components/ShoppingCart";

const { createContext, useContext, useState } = require("react");

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

//provider
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // total quantity in shoppingbag
  const cartQuantity = cartItems.reduce((quantity, item) => {
    return item.quantity + quantity;
  }, 0);

  const getItemQuantity = (articleNumber) => {
    return (
      cartItems.find((item) => item.articleNumber === articleNumber)
        ?.quantity || 0
    );
  };

  //Adds one to shoppingcart

  const incrementQuantity = (cartItem) => {
    const { articleNumber, product } = cartItem;

    setCartItems((items) => {
      if (items.find((item) => item.articleNumber === articleNumber) == null) {
        return [...items, { articleNumber, product, quantity: 1 }];
      } else {
        return items.map((item) => {
          if (item.articleNumber === articleNumber) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //Removes one from shoppingcart

  const decrementQuantity = (cartItem) => {
    const { articleNumber } = cartItem;

    setCartItems((items) => {
      if (
        items.find((item) => item.articleNumber === articleNumber).quantity ===
        1
      ) {
        return items.filter((item) => item.articleNumber !== articleNumber);
      } else {
        return items.map((item) => {
          if (item.articleNumber === articleNumber) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //removes all of one article from shoppingcart

  const removeItem = (articleNumber) => {
    setCartItems((items) => {
      return items.filter((item) => item.articleNumber !== articleNumber);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        getItemQuantity,
        incrementQuantity,
        decrementQuantity,
        removeItem,
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
};
