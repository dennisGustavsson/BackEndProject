import { IProduct } from "./productModels";

export interface IShoppingCartItem {
	articleNumber: string;
	quantity: number;
	item: IProduct[];
}
