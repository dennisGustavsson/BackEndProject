import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";
const WishListView = () => {
  /* window title  */
  window.top.document.title = "Wish List | Fixxo";

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  );
};
export default WishListView;
