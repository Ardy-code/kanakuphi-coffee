import logo from "@/assets/kana-kuphi-logo.png";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 sm:pt-32 pb-12 sm:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: About Us */}
          <div className="space-y-4 sm:space-y-6 animate-slide-in" id="about">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              About Us
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Kana Kuphi is a cozy place to hang out with selected coffee and light meals, 
              perfect for studying or casual conversations. We pride ourselves on creating 
              a warm and welcoming atmosphere where you can relax, work, or catch up with friends 
              over a delicious cup of coffee.
            </p>
            <div className="pt-4">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-accent font-medium">
                  Your neighborhood coffee destination ☕
                </p>
              </div>
            </div>
          </div>

          {/* Right: Logo */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
              <img
                src={logo}
                alt="Kana Kuphi Logo"
                className="relative w-64 h-64 sm:w-80 sm:h-80 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
