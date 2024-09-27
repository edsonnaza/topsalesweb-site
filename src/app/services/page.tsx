 
 
import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesPartTwo from "@/components/Services2/index";
import ServicesPartThree from "@/components/Services2/ServicePartThree";
import ServicesPartFour from "@/components/Services2/ServicesPartFour"; 
import ServicesPartFive from "@/components/Services2/ServicesPartFive";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | The best CRM for your bussiness.",
  description: "This is service page for TopSalesWeb",
  // other metadata
};

const Services = () => {
  return (
    <> 
      <ServicesSectionOne />
      <ServicesPartTwo />
      <ServicesPartThree />
      <ServicesPartFour />
      <ServicesPartFive />
      
       
    </>
  );
};

export default Services;
