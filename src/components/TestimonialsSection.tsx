
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import AnimatedSection from "./AnimatedSection";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Екатерина М.",
      text: "Заказывала букет на день рождения мамы. Цветы были невероятно свежими и простояли больше двух недель! Очень довольна качеством и сервисом.",
      rating: 5,
      initials: "ЕМ",
      date: "15 апреля 2025"
    },
    {
      name: "Алексей К.",
      text: "Отличный сервис! Заказал букет для жены на годовщину свадьбы с доставкой. Курьер приехал вовремя, цветы были именно такими, как на фото.",
      rating: 5,
      initials: "АК",
      date: "2 мая 2025"
    },
    {
      name: "Мария С.",
      text: "Восхитительные цветы и внимательное отношение к клиентам. Флористы помогли мне выбрать идеальную композицию для важного события. Спасибо!",
      rating: 4,
      initials: "МС",
      date: "28 апреля 2025"
    },
    {
      name: "Дмитрий В.",
      text: "Заказываю не первый раз, всегда отличное качество и креативный подход. Моя девушка в восторге от каждого букета!",
      rating: 5,
      initials: "ДВ",
      date: "10 мая 2025"
    },
    {
      name: "Ольга П.",
      text: "Очень понравились композиции с суккулентами. Заказала несколько для своего офиса, все в восторге. Растения здоровые и красивые.",
      rating: 5,
      initials: "ОП",
      date: "5 мая 2025"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="font-playfair text-3xl font-bold mb-2 text-center text-[#403E43]">
            Отзывы наших клиентов
          </h2>
          <p className="text-[#8A898C] mb-12 text-center max-w-2xl mx-auto">
            Мы ценим каждое мнение и стремимся делать наш сервис еще лучше
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={200}>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static transform-none rounded-full border-[#5A3825] text-[#5A3825] h-10 w-10" />
              <CarouselNext className="relative static transform-none rounded-full border-[#5A3825] text-[#5A3825] h-10 w-10" />
            </div>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
