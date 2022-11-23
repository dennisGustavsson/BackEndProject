import "./App.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import CategoriesView from "./Views/CategoriesView";
import ProductsView from "./Views/ProductsView";
import ProductDetailsView from "./Views/ProductDetailsView";
import ContactsView from "./Views/ContactsView";
import SearchView from "./Views/SearchView";
import CompareView from "./Views/CompareView";
import WishListView from "./Views/WishListView";
import ShoppingcartView from "./Views/ShoppingcartView";
import NotFoundView from "./Views/NotFoundView";
import { ProductProvider } from "./Contexts/ProductContext";
import { ShoppingCartProvider } from "./Contexts/ShoppingCartContext";
import ProductManagerView from "./Views/ProductManagerView";
import UserProvider from "./Contexts/UserContext";

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<ShoppingCartProvider>
					<ProductProvider>
						<Routes>
							<Route path='/' element={<HomeView />} />
							<Route path='/categories' element={<CategoriesView />} />
							<Route
								path='/products'
								element={<ProductsView title='Products' />}
							/>
							<Route path='/products/:id' element={<ProductDetailsView />} />
							<Route path='/productmanager' element={<ProductManagerView />} />
							<Route path='/contacts' element={<ContactsView />} />
							<Route path='/search' element={<SearchView />} />
							<Route path='/compare' element={<CompareView />} />
							<Route path='/wishlist' element={<WishListView />} />
							<Route path='/shoppingcart' element={<ShoppingcartView />} />
							<Route path='*' element={<NotFoundView />} />
						</Routes>
					</ProductProvider>
				</ShoppingCartProvider>
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;

/* 

interface IShoppingCart {
  increment: (articleNumber:string) => void
  decrement: (articleNumber:string) => void
  remove: (articleNumber:string) => never
  totalAmount: () => number
  totalQuantity: () => number
}

interface IProductItem {
  articleNumber: string,
  name: string,
  desription?: string,
  price: number
}

interface ICartItem {
  articleNumber: string,
  item: IProductItem,
  quantity: number
}

*/
