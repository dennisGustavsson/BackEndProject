import { useContext } from "react";
import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";
import ProductGridSection from "../Sections/ProductGridSection";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";
import { IProductContext } from "../Models/productModels";

interface Props {
	title: string;
}

const ProductsView: React.FC<Props> = ({ title }) => {
	const { products, getProducts } = useProductContext() as IProductContext;

	useEffect(() => {
		getProducts();
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
