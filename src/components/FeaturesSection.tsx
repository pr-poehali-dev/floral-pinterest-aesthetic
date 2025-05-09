
import FeatureCard from "./FeatureCard";
import AnimatedSection from "./AnimatedSection";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Flower",
      title: "Свежие цветы",
      description: "Мы работаем только с проверенными поставщиками и обновляем ассортимент ежедневно.",
      colorClass: "bg-[#FDE1D3]"
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставим ваш заказ в течение 2 часов по городу или в указанное вами время.",
      colorClass: "bg-[#F2FCE2]"
    },
    {
      icon: "Sparkles",
      title: "Уникальный дизайн",
      description: "Наши флористы создают неповторимые композиции с учетом ваших пожеланий.",
      colorClass: "bg-[#FFDEE2]"
    },
    {
      icon: "Heart",
      title: "Гарантия свежести",
      description: "Если цветы завянут раньше, чем через 7 дней, мы вернем деньги или заменим букет.",
      colorClass: "bg-[#E5DEFF]"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="font-playfair text-3xl font-bold mb-2 text-center text-[#403E43]">
            Почему выбирают нас
          </h2>
          <p className="text-[#8A898C] mb-12 text-center max-w-2xl mx-auto">
            Мы стремимся сделать каждый момент особенным через красоту цветов
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={100 * index}
            >
              <FeatureCard {...feature} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
