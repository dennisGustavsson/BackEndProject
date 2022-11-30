import React, { useState, useContext, createContext } from "react";
import { IProduct, IProductRequest } from "../Models/productModels";
import { User, UserRequest, UserProviderProps } from "../Models/userModels";

//! INTERFACE/CONTRACT FOR OUR CONTEXT
export interface IProductContext {
	product: IProduct;
	productRequest: IProductRequest;
	setProduct: React.Dispatch<React.SetStateAction<IProduct>>;
	setProductRequest: React.Dispatch<React.SetStateAction<IProductRequest>>;
	products: IProduct[];
	create: (e: React.FormEvent) => void;
	get: (articleNumber: number) => void;
	getAll: () => void;
	update: (e: React.FormEvent) => void;
	remove: (articleNumber: number) => void;
}

//! the context
export const UserContext = createContext<IProductContext | null>(null);
export const useUserContext = () => {
	return useContext(UserContext);
};

//! the context provider

const UserProvider = ({ children }: UserProviderProps) => {
	const baseUrl = "http://localhost:5000/api/users";

	const defaultProductValues: IProduct = {
		articleNumber: 0,
		name: "",
		description: "",
		category: "",
		price: 0,
		rating: 0,
		imageName: "",
	};
	const defaultProductRequestValues: IProductRequest = {
		name: "",
		description: "",
		category: "",
		price: 0,
		rating: 0,
	};

	const [product, setProduct] = useState<IProduct>(defaultProductValues);
	const [productRequest, setProductRequest] = useState<IProductRequest>(
		defaultProductRequestValues
	);
	const [products, setProducts] = useState<IProduct[]>([]);

	const create = async (e: React.FormEvent) => {
		e.preventDefault();

		const result = await fetch(`${baseUrl}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(productRequest),
		});
		//! user was created without a problem
		if (result.status === 201) setProductRequest(defaultProductRequestValues); // set default values to form again.
		/* const _product = await result.json
		setPRoduct(prev => { return
		prevProd, _prudouctk
	bör updatera}) */
	};

	//! Fetch a specific user from id.

	const get = async (articleNumber: number) => {
		const result = await fetch(`${baseUrl}/${articleNumber}`);
		if (result.status === 200) setProduct(await result.json());
	};

	//! fetch all users from api
	const getAll = async () => {
		const result = await fetch(`${baseUrl}`);
		if (result.status === 200) setProducts(await result.json()); //setUsers puts all users into users-variable
	};

	//! update a specific user with id
	const update = async (e: React.FormEvent) => {
		e.preventDefault();

		const result = await fetch(`${baseUrl}/${product.articleNumber}`, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		});
		if (result.status === 200) setProduct(await result.json());
	};

	//! delete specific user with id
	const remove = async (articleNumber: number) => {
		const result = await fetch(`${baseUrl}/${articleNumber}`, {
			method: "delete",
		});

		if (result.status === 204) setProduct(defaultProductValues);
	};

	return (
		<UserContext.Provider
			value={{
				product,
				setProduct,
				productRequest,
				setProductRequest,
				products,
				create,
				get,
				getAll,
				update,
				remove,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
