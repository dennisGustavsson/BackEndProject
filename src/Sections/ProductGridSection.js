import ProductCard from "../Components/ProductCard";

const ProductGridSection = ({ title, items = [] }) => {
  return (
    <section className='grid-section'>
      <div className='container'>
        <h2 className='section-title' data-testid='title'>
          {title}
        </h2>
        <div className='product-grid'>
          {items.map((product) => (
            <ProductCard key={product.articleNumber} item={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductGridSection;
