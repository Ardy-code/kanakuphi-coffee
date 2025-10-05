import { Card } from "@/components/ui/card";
import weekendPromo from "@/assets/promo-weekend.png";
import loyaltyPromo from "@/assets/promo-loyalty.png";
import studentPromo from "@/assets/promo-student.png";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      image: weekendPromo,
      alt: "Weekend Special Promotion",
    },
    {
      id: 2,
      image: loyaltyPromo,
      alt: "Loyalty Program",
    },
    {
      id: 3,
      image: studentPromo,
      alt: "Student Discount",
    },
  ];

  return (
    <section id="promotions" className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Special Promotions
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Jangan lewatkan penawaran promo terbaik dari Kana Kuphi
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {promotions.map((promo, index) => (
            <Card
              key={promo.id}
              className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground text-sm sm:text-base">
            Visit us today and enjoy these exclusive offers! ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
