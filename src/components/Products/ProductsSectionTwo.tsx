 
import ProductCardsFour from "../ProductCards";
import SectionTitle from "../Common/SectionTitle";
import prodDataFour from "../ProductCards/prodDataFour";

const ProductsSectionTwo = () => {
  return (
    <>
     <div className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-20">

       <SectionTitle
          title="Core CRM Platform"
          paragraph="Our Core CRM Platform is the foundation of TopSalesWeb, providing everything you need to manage your client’s data, track interactions, and monitor sales activities."
          center
          />
        <ProductCardsFour prodData={prodDataFour} col={2} />
    </div>
        
    </>
  );
};

export default ProductsSectionTwo;

 
