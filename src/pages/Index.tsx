
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <Banner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
