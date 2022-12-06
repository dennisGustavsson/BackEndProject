import { useContext, useState } from "react";
import { createContext } from "react";
import {
	IProductProviderProps,
	IProduct,
	IProductRequest,
} from "../Models/productModels";

//! INTERFACE/CONTRACT FOR OUR CONTEXT
export interface IProductContext {
	product: IProduct;
	productRequest: IProductRequest;
	setProduct: React.Dispatch<React.SetStateAction<IProduct>>;
	featuredProducts: IProduct[];
	firstFlashProducts: IProduct[];
	secondFlashProducts: IProduct[];
	setProductRequest: React.Dispatch<React.SetStateAction<IProductRequest>>;
	products: IProduct[];
	create: (e: React.FormEvent) => void;
	get: (articleNumber: string) => void;
	getFeaturedProducts: (tag:string, take: number) => void;
	getFirstFlashProducts: (tag:string, take: number) => void;
	getSecondFlashProducts: (tag:string, take: number) => void;
	getAll: () => void;
	update: (e: React.FormEvent) => void;
	remove: (articleNumber: string|number) => void;
}

//! - - - - - context - - - - - -
//custom state
export const useProductContext = () => {
	return useContext(ProductContext);
};

export const ProductContext = createContext<IProductContext | null>(null);

//! - - - - - - - - - - PROVIDER - - - - - - - - - -

export const ProductProvider = ({ children }: IProductProviderProps) => {
	const baseUrl = "http://localhost:5000/api/products";

	// for product details
	const defaultProductValues: IProduct = {
		tag: "",
		articleNumber: "",
		name: "",
		description: "",
		category: "",
		price: 0,
		rating: 0,
		imageName: "",
	};
	const defaultProductRequestValues: IProductRequest = {
		tag: "",
		name: "",
		description: "",
		category: "",
		price: 0,
		rating: 0,
	};
	const [product, setProduct] = useState<IProduct>(defaultProductValues);
	//all products list
	const [products, setProducts] = useState<IProduct[]>([]);
	const [productRequest, setProductRequest] = useState<IProductRequest>(
		defaultProductRequestValues
	);

	// //featured products list
	const [featuredProducts, setFeaturedProducts] = useState([]);
	// //flashsale product list
	const [firstFlashProducts, setFirstFlashProducts] = useState([]);
	const [secondFlashProducts, setSecondFlashProducts] = useState([]);
	// //bottom products
	// const [specialProducts, setSpecialProducts] = useState([]);


	//! Create product
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
	};

	//! fetch all users from api
	const getAll = async () => {
		const result = await fetch(`${baseUrl}`);
		if (result.status === 200) setProducts(await result.json()); //setUsers puts all users into users-variable
	};

	//! Fetch a specific user from id.

	const get = async (articleNumber?: string) => {
		const result = await fetch(`${baseUrl}/product/details/${articleNumber}`);
		if (result.status === 200) setProduct(await result.json());
	};

	//! update a specific user with id
	const update = async (e: React.FormEvent) => {
		e.preventDefault();

		const result = await fetch(`${baseUrl}/product/details/${product.articleNumber}`, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		});
		if (result.status === 200) setProduct(await result.json());
	};

	const getFeaturedProducts = async (tag = "", take=0) => {
		const result = await fetch(baseUrl + `/${tag}/${take}`);
		setFeaturedProducts(await result.json());
	};
		const getFirstFlashProducts = async (tag = "", take = 0) => {
			const result = await fetch(baseUrl + `/${tag}/${take}`);
			setFirstFlashProducts(await result.json());
		};
		const getSecondFlashProducts = async (tag = "", take = 0) => {
			const result = await fetch(baseUrl + `/${tag}/${take}`);
			setSecondFlashProducts(await result.json());
		};

	//! delete specific user with id
	const remove = async (articleNumber: string|number) => {
		const result = await fetch(`${baseUrl}/product/details/${articleNumber}`, {
			method: "delete",
		});

		if (result.status === 204) setProduct(defaultProductValues);
	};

	//provides all context to rest of app
	return (
		<ProductContext.Provider
			value={{
				products,
				create,
				product,
				get,
				getAll,
				update,
				remove,
				productRequest,
				setProductRequest,
				setProduct,
				getFeaturedProducts,
				featuredProducts,
				firstFlashProducts,
				getFirstFlashProducts,
				secondFlashProducts,
				getSecondFlashProducts
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
