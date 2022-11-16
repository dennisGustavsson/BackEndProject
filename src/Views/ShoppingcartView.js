import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";
const ShoppingcartView = () => {
  /* window title  */
  window.top.document.title = "Your Shopping Cart | Fixxo";

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  );
};
export default ShoppingcartView;
