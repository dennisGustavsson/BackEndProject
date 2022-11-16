import { NavLink } from "react-router-dom";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";
import ProductGridSection from "./ProductGridSection";

const FlashSaleSection3 = () => {
  const { specialProducts, getSpecialProducts } = useProductContext();

  useEffect(() => {
    getSpecialProducts(3);
  }, []);

  return (
    <>
      <section className='flash-sale justify-content-center'>
        <div className='flash-grid-center'>
          <div className='flash-advert'>
            <h2>UP TO 70% OFF*</h2>
            <h4>Women's, Men's & Kids Winter Fashion</h4>
            <NavLink className='btn-theme btn-theme-white'>Flash Sale</NavLink>
          </div>
          <div className='product-grid-col'>
            <ProductGridSection
              title='Latest Product'
              items={specialProducts}
            />
            <ProductGridSection
              title='Best Selling Product'
              items={specialProducts}
            />
            <ProductGridSection
              title='Top Reacted Product'
              items={specialProducts}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default FlashSaleSection3;
