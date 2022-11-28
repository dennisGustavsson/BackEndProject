import ProductCard from "../Components/ProductCard";
import { IProduct } from "../Models/productModels";

interface Props {
	title: string;
	items: IProduct[];
}

const ProductGridSection: React.FC<Props> = ({ title, items = [] }) => {
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
