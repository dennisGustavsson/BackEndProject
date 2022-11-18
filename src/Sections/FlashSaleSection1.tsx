import { NavLink } from "react-router-dom";
import ProductGridSection from "./ProductGridSection";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";

const FlashSaleSection1 = () => {
  const { flashProducts, getFlashProducts } = useProductContext();

  useEffect(() => {
    getFlashProducts(4);
  }, []);

  return (
    <>
      <section className='flash-sale'>
        <div className='flash-grid'>
          <div className='flash-advert'>
            <h2>2 FOR $29.00</h2>
            <NavLink to="/" className='btn-theme btn-theme-white'>Flash Sale</NavLink>
          </div>
          <ProductGridSection items={flashProducts} title={""} />
        </div>
      </section>
    </>
  );
};
export default FlashSaleSection1;
