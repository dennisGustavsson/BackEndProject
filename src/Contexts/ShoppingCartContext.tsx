import React from "react";
import ShoppingCart from "../Components/ShoppingCart";
import { IProduct } from "../Models/productModel";
import { useState } from "react";
import { useContext } from "react";
//  models

export interface IShoppingCartContext {
	cartItems: CartItemProp[];
	cartQuantity: number;
	incrementQuantity: (CartItemProp: any) => void;
	decrementQuantity: (CartItemProp: any) => void;
	getItemQuantity: (articleNumber: any) => void;
	removeItem: (articleNumber: string) => void;
}

interface CartItemProp {
	articleNumber: string;
	quantity: number;
	// product: string;
	item?: IProduct;
	items?: IProduct[];
}

interface ShoppingCartProviderProps {
	children: any;
}

// contexts

const { createContext/* , useContext, useState  */} = require("react");

//  const ShoppingCartContext = createContext<IShoppingCartContext | null>(null);


const ShoppingCartContext = createContext({} as IShoppingCartContext);



export const useShoppingCart = () => {
	return useContext(ShoppingCartContext);
};

// - - - - - - - - - - PROVIDER - - - - - - - - -

export const ShoppingCartProvider = ({
	children
}: ShoppingCartProviderProps) => {
	const [cartItems, setCartItems] = useState<CartItemProp[]>([]);

	// total quantity in shoppingbag
	const cartQuantity = cartItems.reduce((quantity, item) => {
		return item.quantity + quantity;
	}, 0);

	const getItemQuantity = (articleNumber:string) => {
		return (
			cartItems.find((item) => item.articleNumber === articleNumber)
				?.quantity || 0
		);
	};

	//Adds one to shoppingcart

	const incrementQuantity = (cartItem:any) => {
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

	const decrementQuantity = (cartItem:any) => {
		const { articleNumber } = cartItem;

		setCartItems((items) => {
			if (
				items.find((item) => item.articleNumber === articleNumber)?.quantity ===
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

	const removeItem = (articleNumber:string) => {
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
