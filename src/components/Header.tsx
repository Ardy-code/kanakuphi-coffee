import { Coffee, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openLocation = () => {
    window.open(
      "https://www.google.com/maps/dir//Jl.+KL.+Yos+Sudarso,+Tj.+Mulia,+Kec.+Medan+Deli,+Kota+Medan,+Sumatera+Utara/@3.6362023,98.5841555,29831m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x303133c52448caef:0x7df31ef70768512!2m2!1d98.6666108!2d3.6361636?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Promotions", path: "/promotions" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-xl sm:text-2xl font-bold text-primary">
              Kana Kuphi
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`transition-colors font-medium ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </button>
            ))}
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
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`text-sm transition-colors font-medium ${
                isActive(item.path)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
