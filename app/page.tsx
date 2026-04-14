import HeroSection from "./components/HeroSection";
import TextParallax from "./components/TextParallax";
import ShopByCategory from "./components/ShopByCategory";
import FeaturedCollection from "./components/FeaturedCollection";
import EditorialSection from "./components/EditorialSection";
import CTASection from "./components/CTASection";
import CategoryCards from "./components/CategoryCards";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import ContactMap from "./components/ContactMap";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <TextParallax />
      <FeaturedCollection />

      {/* Products */}
      <ShopByCategory />

      {/* Categories */}
      <CategoryCards />

      {/* Why Choose us */}
      <EditorialSection />



      <Testimonials />
      {/* <CTASection /> */}
      <InquiryForm />
      <ContactMap />
    </main>
  );
}
