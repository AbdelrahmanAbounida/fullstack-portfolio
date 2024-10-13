import Hero from "@/components/layout/hero";
import { LampDemo } from "@/components/layout/acentui/lamp";
import Navbar from "@/components/layout/navbar";
import SampleProjects from "@/components/layout/sample-projects";
import Services from "@/components/layout/services";
import ShowVideo from "@/components/layout/show-video";
import Testimonials from "@/components/layout/testimonials";
import Image from "next/image";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="h-full w-full  flex flex-col items-center  relative">
      {/* <div className="absolute left-0 top-4 w-full h-[400px] z-[-1]  bg-[radial-gradient(#52525B,transparent_1px)] [background-size:32px_32px]" /> */}
      <div className="h-full flex flex-col items-center container max-w-7xl mx-auto ">
        {/** Navbar */}
        <Navbar />

        {/** Hero */}
        <Hero />

        {/** Video */}
        <ShowVideo />

        {/** Services */}
        <Services />

        {/** Sample Projects */}
        <SampleProjects />

        {/** Testimonials */}
        <Testimonials />

        {/** My Tech Stack */}

        {/** Contact Me & Footer */}
        <Footer />
      </div>
    </div>
  );
}
