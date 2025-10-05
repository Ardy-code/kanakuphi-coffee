import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, UtensilsCrossed, Coffee } from "lucide-react";
import friedRice from "@/assets/menu-fried-rice.png";
import indomie from "@/assets/menu-indomie.png";
import blackCoffee from "@/assets/menu-black-coffee.png";
import icedTea from "@/assets/menu-iced-tea.png";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "food" | "drinks";
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Special Fried Rice",
    description: "Nasi goreng spesial dengan bumbu pilihan, disajikan dengan telur mata sapi dan acar",
    price: "Rp20,000",
    image: friedRice,
    category: "food",
  },
  {
    id: 2,
    name: "Indomie with Egg",
    description: "Mi instan goreng dengan telur dadar, cocok untuk cemilan atau makanan ringan",
    price: "Rp12,000",
    image: indomie,
    category: "food",
  },
  {
    id: 3,
    name: "Black Coffee",
    description: "Kopi hitam murni dengan biji kopi pilihan, sempurna untuk penikmat kopi sejati",
    price: "Rp8,000",
    image: blackCoffee,
    category: "drinks",
  },
  {
    id: 4,
    name: "Iced Sweet Tea",
    description: "Teh manis dingin yang segar, minuman sempurna untuk menemani aktivitas Anda",
    price: "Rp5,000",
    image: icedTea,
    category: "drinks",
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "food" | "drinks">("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const currentItem = filteredItems[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const categories = [
    { id: "all", name: "All Menu", icon: UtensilsCrossed },
    { id: "food", name: "Food", icon: UtensilsCrossed },
    { id: "drinks", name: "Drinks", icon: Coffee },
  ];

  return (
    <section id="menu" className="py-12 sm:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">Our Menu</h2>
          <p className="text-muted-foreground text-sm sm:text-base">Discover our selection of delicious food and beverages</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[240px_1fr] gap-6 lg:gap-8">
            {/* Sidebar Categories - Desktop */}
            <div className="hidden lg:block">
              <Card className="bg-card p-4 space-y-2">
                {categories.map((cat) => {
                  const IconComponent = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id as "all" | "food" | "drinks");
                        setCurrentIndex(0);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        selectedCategory === cat.id
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "hover:bg-secondary text-foreground"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="text-sm">{cat.name}</span>
                    </button>
                  );
                })}
              </Card>
            </div>

            {/* Mobile Categories */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <Button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id as "all" | "food" | "drinks");
                      setCurrentIndex(0);
                    }}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    className="whitespace-nowrap"
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {cat.name}
                  </Button>
                );
              })}
            </div>

            {/* Product Display */}
            <Card className="bg-card p-6 sm:p-8 animate-fade-in">
              {filteredItems.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                    {/* Product Image */}
                    <div className="relative flex items-center justify-center">
                      <div className="relative w-full max-w-md aspect-square">
                        <img
                          src={currentItem.image}
                          alt={currentItem.name}
                          className="w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                      
                      {/* Navigation Arrows - Desktop */}
                      {filteredItems.length > 1 && (
                        <>
                          <button
                            onClick={handlePrev}
                            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-card border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
                            aria-label="Previous item"
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </button>
                          <button
                            onClick={handleNext}
                            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-card border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
                            aria-label="Next item"
                          >
                            <ChevronRight className="h-6 w-6" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
                          {currentItem.category === "food" ? "FOOD SERIES" : "DRINKS SERIES"}
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3">
                          {currentItem.name}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          {currentItem.description}
                        </p>
                      </div>
                      
                      <div className="pt-4">
                        <div className="text-3xl sm:text-4xl font-bold text-foreground">
                          {currentItem.price}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation Arrows */}
                  {filteredItems.length > 1 && (
                    <div className="md:hidden flex items-center justify-center gap-4 mt-6">
                      <button
                        onClick={handlePrev}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-card border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                        aria-label="Previous item"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-card border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                        aria-label="Next item"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  )}

                  {/* Dot Indicators */}
                  {filteredItems.length > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-6">
                      {filteredItems.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleDotClick(index)}
                          className={`transition-all ${
                            index === currentIndex
                              ? "w-8 h-2 bg-primary"
                              : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                          } rounded-full`}
                          aria-label={`Go to item ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No items in this category</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
