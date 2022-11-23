import { ReactNode } from "react"

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


export interface IProductProviderProps {
children: ReactNode
}

export interface IProduct {
	articleNumber: string;
	name: string;
	description?: string;
	category: string;
	price: number;
	rating: any;
	imageName: string;
}


export interface IProductRequest {
	name: string
	description: string
	category: string
	price: number
	// imageName?: string
}



/* 

interface User {
	id
	osv
	osv osv
}


interface IUserContext
	user: User
	setUser: React.Dispatch<React.SetStateAction<User>>
	users: User[]
	create: (e: react.formevent) =>  void
	get: (id:number) => void
	getAll () => void
	update: (id:number, e:formevent) => void
	delete: (id:number) => void
*/