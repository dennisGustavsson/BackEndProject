import { useContext } from "react";
import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";
import ProductGridSection from "../Sections/ProductGridSection";
import { useProductContext, IProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";

interface Props {
	title: string;
}

const ProductsView: React.FC<Props> = ({ title }) => {
	const { products, getAll } = useProductContext() as IProductContext;

	useEffect(() => {
		getAll();
	}, []);

	return (
		<>
			<MainMenuSection />
			<ProductGridSection title={title} items={products} />
			<FooterSection />
		</>
	);
};
export default ProductsView;
