import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Promotions = () => {
  return (
    <section id="promotions" className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">Special Promotions</h2>
          <p className="text-muted-foreground text-sm sm:text-base">Check out our latest offers and discounts</p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Promotion Card 1 */}
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-xl transition-all duration-300 animate-slide-in p-6 sm:p-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">Coming Soon</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Exciting promotions and special offers will be announced here. Stay tuned!
              </p>
            </div>
          </Card>

          {/* Promotion Card 2 */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-xl transition-all duration-300 animate-slide-in p-6 sm:p-8" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">Special Deals</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Watch this space for amazing deals on your favorite coffee and meals!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
