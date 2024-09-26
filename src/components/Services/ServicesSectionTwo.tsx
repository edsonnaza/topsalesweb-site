 
import ProductCardsFour from "../ProductCards";
import SectionTitle from "../Common/SectionTitle";
import prodDataFour from "../ProductCards/prodDataFour";

const ServicesSectionTwo = () => {
  return (
    <>
     <div className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-20">

       <SectionTitle
          title="Implementation & Onboarding"
          paragraph="Get started with TopSalesWeb smoothly and efficiently with our comprehensive implementation and onboarding services."
          center
          />
        <ProductCardsFour prodData={prodDataFour} col={2} />
    </div>
        
    </>
  );
};

export default ServicesSectionTwo;

 
