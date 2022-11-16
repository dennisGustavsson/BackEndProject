import { useContext } from "react";
import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";
import ProductGridSection from "../Sections/ProductGridSection";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";
const ProductsView = ({ title }) => {
  const { products, getProducts } = useProductContext();

  /* window title  */
  window.top.document.title = "Product | Fixxo";

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <MainMenuSection />
      <ProductGridSection title='Products' items={products} />
      <FooterSection />
    </>
  );
};
export default ProductsView;
