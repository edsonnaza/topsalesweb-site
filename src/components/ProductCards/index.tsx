import SectionTitle from "../Common/SectionTitle";
import SingleItem from "./SingleItem";


const ProductItem = ({prodData,col}) => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className={`grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-${col}`}>
          {prodData.map((item) => (
            <div key={item.id} className="w-full">
              <SingleItem blog={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
