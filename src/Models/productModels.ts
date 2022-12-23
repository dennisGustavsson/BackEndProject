export interface IProductProviderProps {
	children: any;
}

//for updates
export interface IProduct {
	articleNumber: string | number;
	tag?: string;
	name: string;
	description?: string;
	category: string;
	price: number;
	rating: number;
	imageName?: string;
}

//new product
export interface IProductRequest {
	tag?: string;
	name: string;
	description: string;
	category: string;
	price: number;
	rating: number;
	imageName?: string;
}
