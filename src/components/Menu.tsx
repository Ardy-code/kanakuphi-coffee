import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Coffee } from "lucide-react";

const Menu = () => {
  const foodItems = [
    { name: "Special Fried Rice", price: "Rp20,000" },
    { name: "Indomie with Egg", price: "Rp12,000" },
  ];

  const drinkItems = [
    { name: "Black Coffee", price: "Rp8,000" },
    { name: "Iced Sweet Tea", price: "Rp5,000" },
  ];

  return (
    <section id="menu" className="py-12 sm:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">Our Menu</h2>
          <p className="text-muted-foreground text-sm sm:text-base">Discover our selection of delicious food and beverages</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Food Section */}
          <Card className="bg-card hover:shadow-lg transition-all duration-300 animate-slide-in border-border">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-primary text-xl sm:text-2xl">
                <UtensilsCrossed className="h-5 w-5 sm:h-6 sm:w-6" />
                Food
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {foodItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 sm:p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <span className="font-medium text-foreground text-sm sm:text-base">{item.name}</span>
                  <span className="text-accent font-semibold text-sm sm:text-base">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Drinks Section */}
          <Card className="bg-card hover:shadow-lg transition-all duration-300 animate-slide-in border-border" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-primary text-xl sm:text-2xl">
                <Coffee className="h-5 w-5 sm:h-6 sm:w-6" />
                Drinks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {drinkItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 sm:p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <span className="font-medium text-foreground text-sm sm:text-base">{item.name}</span>
                  <span className="text-accent font-semibold text-sm sm:text-base">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Menu;
