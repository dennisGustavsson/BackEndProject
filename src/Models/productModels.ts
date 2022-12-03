import { ReactNode } from "react";

// export interface IProductContext {
// 	product: IProduct;
// 	products: IProduct[];
// 	featuredProducts: IProduct[];
// 	flashProducts: IProduct[];
// 	specialProducts: IProduct[];
// 	getProduct: (articleNumber?: string) => void;
// 	getProducts: () => void;
// 	getFeaturedProducts: (take: number) => void;
// 	getSpecialProducts: (take: number) => void;
// 	getFlashProducts: (take: number) => void;
// }

export interface IProductProviderProps {
	children: any;
}

//for updates
export interface IProduct {
	articleNumber: string |number;
	tag?: string,
	name: string;
	description?: string;
	category: string;
	price: number;
	rating: number;
	imageName?: string;
}

//new product
export interface IProductRequest {
	tag?: string,
	name: string;
	description: string;
	category: string;
	price: number;
	rating: number;
	imageName?: string
}

