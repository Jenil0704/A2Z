import HeroSection from "./components/HeroSection";
import ShopByCategory from "./components/ShopByCategory";
import FeaturedCollection from "./components/FeaturedCollection";
import WhyEleganceEnclave from "./components/WhyEleganceEnclave";
import EditorialSection from "./components/EditorialSection";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import ContactMap from "./components/ContactMap";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <ShopByCategory />
      <FeaturedCollection />
      {/* <WhyEleganceEnclave /> */}
      <EditorialSection />
      <Testimonials />
      <InquiryForm />
      <ContactMap />
    </main>
  );
}
