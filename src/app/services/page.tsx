 
 
import ProductsSectionOne from "@/components/Products/ProductsSectionOne";
 

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | The best CRM for your bussiness.",
  description: "This is products page for TopSalesWeb",
  // other metadata
};

const Services = () => {
  return (
    <> 
      <ProductsSectionOne />
       
   
    </>
  );
};

export default Services;
