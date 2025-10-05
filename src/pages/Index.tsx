import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Promotions from "@/components/Promotions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Promotions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
