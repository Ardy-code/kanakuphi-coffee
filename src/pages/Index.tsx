import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Users, Utensils, Wifi, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logo from "@/assets/kana-kuphi-logo.png";
import heroImage from "@/assets/hero-coffee-shop.jpg";
import featureCoffee from "@/assets/feature-coffee.jpg";
import featureStudy from "@/assets/feature-study.jpg";
import featureFood from "@/assets/feature-food.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee",
      description: "Carefully selected coffee beans brewed to perfection",
      image: featureCoffee,
    },
    {
      icon: Users,
      title: "Perfect Hangout Spot",
      description: "Cozy atmosphere ideal for catching up with friends",
      image: featureStudy,
    },
    {
      icon: Utensils,
      title: "Delicious Light Meals",
      description: "Fresh food prepared daily to complement your coffee",
      image: featureFood,
    },
  ];

  const highlights = [
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "Fast and reliable internet for work or study",
    },
    {
      icon: Clock,
      title: "Open Daily",
      description: "Mon-Fri: 8AM-10PM, Sat-Sun: 9AM-11PM",
    },
    {
      icon: MapPin,
      title: "Great Location",
      description: "Easy to find and accessible",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-16 sm:pt-20 min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Kana Kuphi Coffee Shop Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 sm:space-y-8 animate-slide-in text-white">
                <div className="inline-block">
                  <img
                    src={logo}
                    alt="Kana Kuphi Logo"
                    className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-2xl"
                  />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Cozy Coffee Destination
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl">
                  Experience the perfect blend of comfort and quality at Kana Kuphi. 
                  Where every cup tells a story and every visit feels like home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={() => navigate("/menu")}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
                  >
                    Explore Menu
                  </Button>
                  <Button
                    onClick={() => navigate("/promotions")}
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8"
                  >
                    View Promotions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                About Kana Kuphi
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Kana Kuphi is more than just a coffee shop – it's a community hub where 
                coffee lovers, students, and professionals come together. We pride ourselves 
                on serving carefully selected coffee and delicious light meals in a warm, 
                welcoming atmosphere.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Whether you're here to study, work on your next big project, or simply 
                enjoy a peaceful moment with friends, Kana Kuphi provides the perfect 
                setting for all your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Why Visit Kana Kuphi?
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover what makes us special
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 animate-fade-in border-border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center mb-3">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center space-y-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Ready for Your Perfect Cup?
              </h2>
              <p className="text-lg sm:text-xl opacity-90">
                Visit us today and experience the Kana Kuphi difference. 
                We're waiting to serve you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  onClick={() => window.open("https://maps.google.com", "_blank")}
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Find Us
                </Button>
                <Button
                  onClick={() => navigate("/menu")}
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  View Full Menu
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
