
import SupportPartFour from "@/components/Support/SupportPartFour";
import SupportPartOne from "@/components/Support/SupportPartOne";
import SupportPartThree from "@/components/Support/SupportPartThree";
import SupportPartTwo from "@/components/Support/SupportPartTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | TopSalesWeb support.",
  description: "This is Support section for TopSalesWeb CRM",
  // other metadata
};

const Support = () => {
  return (
    <>
       
      <SupportPartOne />
      <SupportPartTwo />
      <SupportPartThree />
      <SupportPartFour />
     
   
    </>
  );
};

export default Support;
