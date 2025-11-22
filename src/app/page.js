import Image from "next/image";
import OurRange from "./componts/ourRance";
import NewAravil from "./componts/newAravil";
import OurBlog from "./componts/ourblog";
import Readmore from "./componts/redmore";
import NewsletterSection from "./componts/followus";
import Header from "./componts/header";

export default function Home() {
  return (
    <>
      <Header />
      <OurRange />
      <NewAravil />
      <OurBlog />
      <Readmore />
      <NewsletterSection />
      {/* <div className="w-7xl py-14 m-auto h-8 bg-white"></div> */}
    </>
  );
}
