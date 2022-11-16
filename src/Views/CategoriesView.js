import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";

const CategoriesView = () => {
  /* window title  */
  window.top.document.title = "Categories | Fixxo";

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  );
};
export default CategoriesView;
