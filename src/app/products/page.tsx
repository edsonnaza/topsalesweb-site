 
 
import ProductsSectionOne from "@/components/Products/ProductsSectionOne";
import ProductsSectionTwo from "@/components/Products/ProductsSectionTwo";
import ProductsSectionThree from "@/components/Products/ProductsSectionThree";
import ProductsSectionFour from "@/components/Products/ProductsSectionFour";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | The best CRM for your bussiness.",
  description: "This is products page for TopSalesWeb",
  // other metadata
};

const AboutPage = () => {
  return (
    <> 
      <ProductsSectionOne />
      <ProductsSectionTwo />
      <ProductsSectionThree />
      <ProductsSectionFour />
   
    </>
  );
};

export default AboutPage;
