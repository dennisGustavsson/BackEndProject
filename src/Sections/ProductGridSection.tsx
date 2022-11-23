import ProductCard from "../Components/ProductCard";
import { IProduct } from "../Models/productModels";

const ProductGridSection = ({
	title,
	items = [],
}: {
	title: string;
	items: IProduct[];
}) => {
	return (
		<section className='grid-section'>
			<div className='container'>
				<h2 className='section-title' data-testid='title'>
					{title}
				</h2>
				<div className='product-grid'>
					{items.map((product) => (
						<ProductCard key={product.articleNumber} item={product} />
					))}
				</div>
			</div>
		</section>
	);
};
export default ProductGridSection;
