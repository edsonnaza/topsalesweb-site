 
import ProductCardsFour from "../ProductCards";
import SectionTitle from "../Common/SectionTitle";
import prodDataFour from "../ProductCards/prodDataFour";

const ProductsSectionTwo = () => {
  return (
    <>
     <div className="bg-gray-light dark:bg-bg-color-dark py-12 md:py-20 lg:py-14  ">

       <SectionTitle
          title="Core CRM Platform"
          paragraph="Our Core CRM Platform is the foundation of TopSalesWeb, providing everything you need to manage your client’s data, track interactions, and monitor sales activities."
          center
          mt
          mtv={20}
          />
        <ProductCardsFour prodData={prodDataFour} col={2} />
    </div>
        
    </>
  );
};

export default ProductsSectionTwo;

 
