import CreateForm from "../Components/CreateForm";
import ProductList from "../Components/ProductList";
import UpdateForm from "../Components/UpdateForm";
import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";

const UpdateProductView = () => {
	return (
		<>
			<MainMenuSection />
			<section className='productManager'>
				<div className='container'>
					<UpdateForm />
					<ProductList />
				</div>
			</section>
			<FooterSection />
		</>
	);
};
export default UpdateProductView;
