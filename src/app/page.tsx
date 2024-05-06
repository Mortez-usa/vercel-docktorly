import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Survey from "./survey/page";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Docktorly | Bridging Between Specialty and Primary Care",
  description: "Docktorly is a marketplace platform that connects primary care providers with specialists, streamlining the process of consultation and enhancing patient care.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />

      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <Features />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
