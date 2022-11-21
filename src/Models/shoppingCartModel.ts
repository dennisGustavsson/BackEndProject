import { IProduct } from "./productModel"

export interface IShoppingCartItem {
articleNumber: string
quantity: number
item?: IProduct[]
}