import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        <Menu />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
