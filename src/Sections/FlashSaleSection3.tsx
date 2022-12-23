import { NavLink } from "react-router-dom";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";
import ProductGridSection from "./ProductGridSection";
import { IProductContext } from "../Contexts/ProductContext";

const FlashSaleSection3: React.FC = () => {
	const {
		relatedProducts,
		firstFlashProducts,
		secondFlashProducts,
		getFirstFlashProducts,
		getSecondFlashProducts,
		getByCategory,
	} = useProductContext() as IProductContext;

	useEffect(() => {
		getFirstFlashProducts("firstflashsale", 4);
	}, []);
	useEffect(() => {
		getSecondFlashProducts("secondflashsale", 4);
	}, []);
	useEffect(() => {
		getByCategory("sets", 4);
	}, []);

	return (
		<>
			<section className='flash-sale justify-content-center'>
				<div className='flash-grid-center'>
					<div className='flash-advert'>
						<h2>UP TO 70% OFF*</h2>
						<h4>Women's, Men's & Kids Winter Fashion</h4>
						<NavLink to='/' className='btn-theme btn-theme-white'>
							Flash Sale
						</NavLink>
					</div>
					<div className='product-grid-col'>
						<ProductGridSection
							title='Latest Product'
							items={relatedProducts}
						/>
						<ProductGridSection
							title='Best Selling Product'
							items={firstFlashProducts}
						/>
						<ProductGridSection
							title='Top Reacted Product'
							items={secondFlashProducts}
						/>
					</div>
				</div>
			</section>
		</>
	);
};
export default FlashSaleSection3;
