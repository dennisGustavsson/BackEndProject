import { useParams } from "react-router-dom";
import { FooterSection } from "../Sections/FooterSection";
import MainMenuSection from "../Sections/MainMenuSection";
import BreadcrumbSection from "../Sections/BreadcrumbSection";
import ProductDetailsSection from "../Sections/ProductDetailsSection";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";


const ProductDetailsView = () => {
  const { id } = useParams();
  const { product, getProduct }:any = useProductContext();

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <>
      <MainMenuSection />
      <div className='miniAd'>
        <div className='container'>
          <span>Get 25% OFF at the Fixxo Selection - Shop Now!</span>
        </div>
      </div>
      <BreadcrumbSection currentPage={product.name} />
      <ProductDetailsSection item={product} />
      <FooterSection />
    </>
  );
};
export default ProductDetailsView;
