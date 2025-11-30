import Image from "next/image";
import OurRange from "./components/ourRance";
import NewAravil from "./components/newAravil";
import OurBlog from "./components/ourblog";
import Readmore from "./components/redmore";
import NewsletterSection from "./components/followus";
import Header from "./components/header";
import ContactForm from "./components/contactus/page";

export default function Home() {
  return (
    <>
      <Header />
      <OurRange />
      <NewAravil />
      <OurBlog />
      <Readmore />
      <NewsletterSection />
      <ContactForm />
    </>
  );
}
