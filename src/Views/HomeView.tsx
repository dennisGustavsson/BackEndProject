import ProductGridSection from "../Sections/ProductGridSection";
import FlashSaleSection1 from "../Sections/FlashSaleSection1";
import FlashSaleSection2 from "../Sections/FlashSaleSection2";
import FlashSaleSection3 from "../Sections/FlashSaleSection3";
import { FooterSection } from "../Sections/FooterSection";
import Jumbotron1Section from "../Sections/Jumbotron1Section";
import Jumbotron2Section from "../Sections/Jumbotron2Section";
import MainMenuSection from "../Sections/MainMenuSection";
import OurSpecialitySection from "../Sections/OurSpecialitySection";
import ServiceSection from "../Sections/ServiceSection";
import ShowcaseSection from "../Sections/ShowcaseSection";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";

const HomeView: React.FC = () => {
	const { featuredProducts, getFeaturedProducts }: any = useProductContext();

	/* window title  */

	useEffect(() => {
		getFeaturedProducts("featured", 8); //!tag name
	}, []);

	return (
		<>
			<MainMenuSection />
			<ShowcaseSection />
			<Jumbotron1Section />
			<ProductGridSection title='Featured Products' items={featuredProducts} />
			<Jumbotron2Section />
			<OurSpecialitySection />
			<FlashSaleSection1 />
			<FlashSaleSection2 />
			<FlashSaleSection3 />
			<ServiceSection />
			<FooterSection />
		</>
	);
};
export default HomeView;
