 
import AboutUsPartOne from "@/components/AboutUs/AboutUsPartOne";
import AboutUsPartTwo from "@/components/AboutUs/AboutUsPartTwo";
import AboutUsPartThree from "@/components/AboutUs/AboutUsPartThree";
import AboutUsPartFour from "@/components/AboutUs/AboutUsPartFour";
import AboutUsPartFive from "@/components/AboutUs/AboutUsPartFive";
import AboutUsPartSix from "@/components/AboutUs/AboutUsPartSix";
 

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us Page | About Us for TopSalesWeb",
  description: "This is About Us Page for TopSalesWeb CRM",
  // other metadata
};

const AboutUsPage = () => {
  return (
    <>
       
      <AboutUsPartOne />
      <AboutUsPartTwo />
      <AboutUsPartThree />
      <AboutUsPartFour />
      <AboutUsPartFive />
      <AboutUsPartSix />
      
    </>
  );
};

export default AboutUsPage;


 



 

 



