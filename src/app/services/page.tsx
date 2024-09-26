 
 
import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
 

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
      <ServicesSectionTwo />
       
    </>
  );
};

export default Services;
