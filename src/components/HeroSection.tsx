
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-lg">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-[#403E43] leading-tight animate-fade-in">
            Цветы, которые{" "}
            <span className="text-[#5A3825]">рассказывают</span> историю
          </h1>
          <p className="text-[#8A898C] mb-8 text-lg animate-fade-in">
            Наши букеты — это не просто цветы, а произведения искусства,
            созданные с любовью и вниманием к деталям.
          </p>
          <div className="flex gap-4 animate-fade-in">
            <Button className="bg-[#5A3825] hover:bg-[#44291b] text-white rounded-full px-6">
              Выбрать букет
            </Button>
            <Button
              variant="outline"
              className="border-[#5A3825] text-[#403E43] rounded-full px-6"
            >
              Каталог
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-full bg-[#FDE1D3] w-72 h-72 md:w-96 md:h-96 relative overflow-hidden animate-scale-in">
            <img
              src="https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              alt="Цветочный букет"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply rounded-full"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#F2FCE2] opacity-60"></div>
          <div className="absolute -z-10 -top-5 -right-5 w-24 h-24 rounded-full bg-[#5A3825] opacity-60"></div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/4 left-0 w-40 h-40 rounded-full bg-[#FFDEE2] opacity-30 blur-xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-0 w-64 h-64 rounded-full bg-[#5A3825] opacity-30 blur-xl"></div>
    </section>
  );
};

export default HeroSection;
