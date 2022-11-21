export interface IProduct {
	articleNumber: string;
	name: string;
	description?: string;
	category: string;
	price: number;
	rating: any;
	imageName: string
}

export interface IProductContext {
	product: any
	products: IProduct[]
	featuredProducts: IProduct[]
	flashProducts: IProduct[]
	specialProducts: IProduct[]
	getProduct: (articleNumber:any) => void
	getProducts: () => void
	getFeaturedProducts: (take: number) => void
	getSpecialProducts: (take: number) => void
	getFlashProducts: (take: number) => void
}


export interface ProductProviderProps {
children: any
}