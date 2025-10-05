import Header from "@/components/Header";
import Promotions from "@/components/Promotions";
import Footer from "@/components/Footer";

const PromotionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        <Promotions />
      </main>
      <Footer />
    </div>
  );
};

export default PromotionsPage;
