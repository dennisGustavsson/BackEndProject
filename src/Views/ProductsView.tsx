import { useContext } from "react";
import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";
import ProductGridSection from "../Sections/ProductGridSection";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";
const ProductsView = ({title}: {title:string}) => {
  const { products, getProducts }:any = useProductContext();



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
