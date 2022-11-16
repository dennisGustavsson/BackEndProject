import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";
const SearchView = () => {
  /* window title  */
  window.top.document.title = "Search | Fixxo";

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  );
};
export default SearchView;
