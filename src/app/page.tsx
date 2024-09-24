import AboutSectionOne from "@/components/About/AboutSectionOne";
import HomeSectionTwo from "@/components/Home/HomeSectionTwo";
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
      <HomeSectionTwo />
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <HomeSectionTwo /> */}
      {/* <Features />
      <Video />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}
