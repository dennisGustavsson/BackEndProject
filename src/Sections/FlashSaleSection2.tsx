import { NavLink } from "react-router-dom";
import ProductGridSection from "./ProductGridSection";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";

const FlashSaleSection2 = () => {
  const { flashProducts, getFlashProducts }:any = useProductContext();

  useEffect(() => {
    getFlashProducts(4);
  }, []);
  return (
    <>
      <section className='flash-sale flexEnd'>
        <div className='flash-grid reverse-grid'>
          <ProductGridSection items={flashProducts} title={""} />
          <div className='flash-advert'>
            <h2>2 FOR $49.00</h2>
            <NavLink to="/" className='btn-theme btn-theme-white'>Flash Sale</NavLink>
          </div>
          <div className='product-grid grid-end'></div>
        </div>
      </section>
    </>
  );
};
export default FlashSaleSection2;
