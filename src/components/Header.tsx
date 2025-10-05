import { Coffee, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openLocation = () => {
    window.open("https://maps.google.com", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-xl sm:text-2xl font-bold text-primary">Kana Kuphi</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("promotions")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Promotions
            </button>
            <Button
              onClick={openLocation}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Locations
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={openLocation}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <MapPin className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-center gap-4 pb-4">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-foreground hover:text-primary transition-colors font-medium"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="text-sm text-foreground hover:text-primary transition-colors font-medium"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("promotions")}
            className="text-sm text-foreground hover:text-primary transition-colors font-medium"
          >
            Promotions
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
