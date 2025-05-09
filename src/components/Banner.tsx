
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const Banner = () => {
  return (
    <section className="py-12 px-4 my-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animation="fade-up" className="p-12 bg-[#5A3825]/90 rounded-3xl text-white text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Получите скидку 15% на первый заказ
          </h2>
          <p className="mb-6 max-w-xl mx-auto text-white/80">
            Подпишитесь на нашу рассылку и получите скидку на первый заказ, а также информацию о сезонных предложениях и акциях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="rounded-full py-2 px-4 flex-grow text-[#333] focus:outline-none focus:ring-2 focus:ring-[#FDE1D3]" 
            />
            <Button className="bg-[#FDE1D3] hover:bg-[#F8D2C1] text-[#5A3825] rounded-full">
              Подписаться
            </Button>
          </div>
        </AnimatedSection>
      </div>

      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
          alt="Цветочный фон" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
    </section>
  );
};

export default Banner;
