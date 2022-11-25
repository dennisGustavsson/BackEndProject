import CreateForm from "../Components/CreateForm";
import ProductList from "../Components/ProductList";
import UpdateForm from "../Components/UpdateForm";
import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";

const CreateProductView = () => {
	return (
		<>
			<MainMenuSection />
			<section className='productManager'>
				<div className='container'>
					<CreateForm />
					<hr className='my-5' />
					<ProductList />
				</div>
			</section>
			<FooterSection />
		</>
	);
};
export default CreateProductView;
