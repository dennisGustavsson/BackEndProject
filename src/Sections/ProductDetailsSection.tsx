import { NavLink } from "react-router-dom";
import { useState } from "react";
import ExternalLinkIcon from "../Components/ExternalLinkIcon";
import TabsMenu from "../Components/TabsMenu";
import ProductGridSection from "./ProductGridSection";
import { currencyFormatter } from "../Assets/Scripts/CurrencyFormatter";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";
import { IProduct } from "../Models/productModel";

interface Item {
	item: IProduct;
}

const ProductDetailsSection: React.FC<Item> = ({ item }) => {
	// variable for star-rating
	const ratingAmount: number = item.rating;

	const { flashProducts, getFlashProducts } = useProductContext();
	useEffect(() => {
		getFlashProducts(4);
	}, []);

	//
	const [count, setCount] = useState(1);

	const handleChange = (e: React.MouseEvent<HTMLElement>) => {
		let input = (e.target as Element).id;

		switch (input) {
			case "add":
				setCount(count + 1);
				break;
			case "sub":
				setCount(count - 1);
		}
	};

	return (
		<>
			<div className='product'>
				<div className='container'>
					<div className='product-body'>
						<div className='product-img'>
							<img
								className='hero-image'
								src={item.imageName}
								alt={item.name}
							/>
							<div className='details'>
								<img
									className='detail-image'
									src={item.imageName}
									alt={item.name}
								/>
								<img
									className='detail-image'
									src={item.imageName}
									alt={item.name}
								/>
								<img
									className='detail-image'
									src={item.imageName}
									alt={item.name}
								/>
							</div>
						</div>
						<div className='product-info'>
							<h1>{item.name}</h1>
							<span className='articleNr'>{item.articleNumber}</span>
							<div className='rating'>
								{/* used this :
                https://blog.logrocket.com/build-a-half-star-rating-component-in-react-from-scratch/ */}
								{[...new Array(ratingAmount)].map((arr, star) => {
									return star < ratingAmount ? (
										<i className='fa-solid fa-star' key={star}></i>
									) : null;
								})}
							</div>
							<span className='price'>{currencyFormatter(item.price)}</span>
							<p className='details'>
								Discovered had get considered projection who favourable.
								Necessary up knowledge it tolerably. Unwilling departure
								education is be dashwoods or an. Use off agreeable law unwilling
								sir deficient curiosity instantly. (read more)
							</p>
							<div className='product-form'>
								<form>
									<div className='choose-size'>
										<h4>Size: </h4>
										<input
											type='checkbox'
											className='btn-check'
											name='options'
											id='option1'
											autoComplete='off'
										/>
										<label className='btn btn-secondary' htmlFor='option1'>
											S
										</label>

										<input
											type='radio'
											className='btn-check'
											name='options'
											id='option2'
											autoComplete='off'
										/>
										<label className='btn btn-secondary' htmlFor='option2'>
											M
										</label>

										<input
											type='radio'
											className='btn-check'
											name='options'
											id='option3'
											autoComplete='off'
										/>
										<label className='btn btn-secondary' htmlFor='option3'>
											L
										</label>

										<input
											type='radio'
											className='btn-check'
											name='options'
											id='option4'
											autoComplete='off'
										/>
										<label className='btn btn-secondary' htmlFor='option4'>
											XL
										</label>
									</div>
									<div className='choose-color'>
										<h4>Color: </h4>
										<div className='dropdown'>
											<NavLink
												className='btn btn-secondary dropdown-toggle'
												to='#'
												role='button'
												data-bs-toggle='dropdown'
												aria-expanded='false'
											>
												Choose an Option
											</NavLink>

											<ul className='dropdown-menu'>
												<li>
													<NavLink className='dropdown-item' to='#'>
														Black
													</NavLink>
												</li>
												<li>
													<NavLink className='dropdown-item' to='#'>
														Off white
													</NavLink>
												</li>
												<li>
													<NavLink className='dropdown-item' to='#'>
														Beige
													</NavLink>
												</li>
											</ul>
										</div>
									</div>
									<div className='quantity'>
										<h4>Qty: </h4>

										<div className='qtyCounter'>
											{/* disables sub-button if count is 0 */}
											<button
												className='sub'
												id='sub'
												onClick={handleChange}
												type='button'
												disabled={count === 0 ? true : false}
											>
												-
											</button>
											<div className='output'>{count}</div>
											{/* disables add-button if count is bigger than 10 */}
											<button
												onClick={handleChange}
												className='add'
												id='add'
												type='button'
												disabled={count >= 10 ? true : false}
											>
												+
											</button>
										</div>
										<NavLink to='' className='btn-theme'>
											ADD TO CART
										</NavLink>
									</div>
								</form>
								<div className='shareSocialMedia'>
									<h4>Share: </h4>
									<div className='icon-circle'>
										<ExternalLinkIcon
											link='https://facebook.com'
											icon='fa-brands fa-facebook-f'
										/>
									</div>
									<div className='icon-circle'>
										<ExternalLinkIcon
											link='https://instagram.com'
											icon='fa-brands fa-instagram'
										/>
									</div>
									<div className='icon-circle'>
										<ExternalLinkIcon
											link='https://twitter.com'
											icon='fa-brands fa-twitter'
										/>
									</div>
									<div className='icon-circle'>
										<ExternalLinkIcon
											link='https://google.com'
											icon='fa-brands fa-google'
										/>
									</div>
									<div className='icon-circle'>
										<ExternalLinkIcon
											link='https://linkedin.com'
											icon='fa-brands fa-linkedin'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<TabsMenu />
					<ProductGridSection title='Related Products' items={flashProducts} />
				</div>
			</div>
		</>
	);
};
export default ProductDetailsSection;
