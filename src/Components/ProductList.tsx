import { IProductContext, ProductContext } from "../Contexts/ProductContext";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IProduct } from "../Models/productModels";
import { currencyFormatter } from "../Assets/Scripts/CurrencyFormatter";

const ProductList: React.FC = () => {
	const { products, getAll, remove } = React.useContext(
		ProductContext
	) as IProductContext;

	//! for every new render, useEffect will fetch all users from the list and render to page
	useEffect(() => {
		getAll();
	}, [getAll]);

	return (
		<>
			<h3>Product Manager</h3>
			<div className='product-list'>
				{
					/* renders a user element for every user in list.. */
					products.map((product: IProduct) => (
						<>
							<div className='product-list-item' key={product.articleNumber}>
								<h4>{product.name}</h4>
								<img src={product.imageName} alt={product.name} />
								<h5>{product.category}</h5>
								{currencyFormatter(product.price)}
								<div>
									{[...new Array(product.rating)].map((arr, index) => {
										return index < product.rating ? (
											<i className='fa-solid fa-star' key={index}></i>
										) : null;
									})}
								</div>
								<span>{product.description}</span>

								
									<NavLink
										className='btn-theme'
										to={`/updateproduct/${product.articleNumber}`}
									>
										Update Product
									</NavLink>
									<button
										className='btn-theme btn-theme-dark'
										onClick={() => remove(product.articleNumber)}
									>
										Remove Product
									</button>
								
							</div>
						</>
					))
				}
			</div>
		</>
	);
};
export default ProductList;
