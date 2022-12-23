
import UpdateForm from "../Components/UpdateForm";
import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";

const UpdateProductView: React.FC = () => {
	return (
		<>
			<MainMenuSection />
			<section className='productManager'>
				<div className='container'>
					<UpdateForm />
				</div>
			</section>
			<FooterSection />
		</>
	);
};
export default UpdateProductView;
