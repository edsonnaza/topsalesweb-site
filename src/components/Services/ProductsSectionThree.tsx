 
import SectionTitle from "../Common/SectionTitle";
import ProductCardsThree from "../ProductCards";
import prodDataThree from "../ProductCards/prodDataThree";

const ProductsSectionTwo = () => {
  return (
    <>
    
     
     <div className="bg-gray-light dark:bg-bg-color-dark py-16 pb-2 md:py-20 lg:py-20">

      <SectionTitle 

        title="Advanced Analytics & Reporting"
        paragraph="Unlock the full potential of your data with our Advanced Analytics & Reporting tools. Gain deeper insights into your sales performance, client behavior, and team productivity."
        center
        />
   

          <ProductCardsThree prodData={prodDataThree} col={3} />
     
         
    </div>
        
    </>
  );
};

export default ProductsSectionTwo;

 
