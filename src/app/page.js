import Image from "next/image";
import Navibar from "./componts/navebar";
import OurRange from "./componts/ourRance";
import NewAravil from "./componts/newAravil";
import OurBlog from "./componts/ourblog";
import Readmore from "./componts/redmore";
import Footer from "./componts/footer";
import NewsletterSection from "./componts/followus";

export default function Home() {
  return (
    <>
      <div className="w-full h-full">
        <Navibar />
        <OurRange />
        <NewAravil />
        <OurBlog />
        <Readmore />
        <NewsletterSection />
        <Footer />
      </div>
      {/* <div className="w-7xl py-14 m-auto h-8 bg-white"></div> */}
    </>
  );
}
