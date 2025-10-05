import { Coffee, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-xl sm:text-2xl font-bold text-primary">Kana Kuphi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your cozy neighborhood coffee destination
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Find us on Google Maps</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>+62 XXX XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>hello@kanakuphi.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Opening Hours</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2024 Kana Kuphi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
