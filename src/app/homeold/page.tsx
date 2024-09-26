import AboutSectionOne from "@/components/About/AboutSectionOne";
import HomeSectionTwo from "@/components/Home/HomeSectionTwo";
import HomeSectionThree from "@/components/Home/HomeSectionThree";
import HomeSectionFour from "@/components/Home/HomeSectionFour";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Footer02 from "@/components/Footer/footer02";

 

export const metadata: Metadata = {
  title: "TopSalesWeb",
  description: "This is the TopSalesWeb - Sales like a pro!",
  // other metadata
};

export default function Home() {
  return (
    <>
 

      <ScrollUp />
      <Hero />
      <Brands />  
      <AboutSectionOne />  
      <HomeSectionTwo /> 
      <Features />
      <Video />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />  
      <Footer02 />
   
    </>
  );
}
