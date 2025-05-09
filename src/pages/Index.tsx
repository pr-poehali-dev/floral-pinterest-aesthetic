import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 py-6 flex justify-between items-center border-b border-[#f1f0fb] max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="font-playfair font-bold text-2xl text-[#403E43]">
            Bloom
          </div>
          <div className="text-[#5A3825] text-3xl font-thin leading-none">
            &
          </div>
          <div className="font-playfair font-bold text-2xl text-[#403E43]">
            Petal
          </div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a
            href="#"
            className="text-[#403E43] hover:text-[#5A3825] transition-colors rounded-full px-3 py-1 hover:bg-[#FDE1D3]/20"
          >
            Каталог
          </a>
          <a
            href="#"
            className="text-[#403E43] hover:text-[#5A3825] transition-colors rounded-full px-3 py-1 hover:bg-[#FDE1D3]/20"
          >
            Букеты
          </a>
          <a
            href="#"
            className="text-[#403E43] hover:text-[#5A3825] transition-colors rounded-full px-3 py-1 hover:bg-[#FDE1D3]/20"
          >
            Подписка
          </a>
          <a
            href="#"
            className="text-[#403E43] hover:text-[#5A3825] transition-colors rounded-full px-3 py-1 hover:bg-[#FDE1D3]/20"
          >
            О нас
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Icon name="Search" className="text-[#403E43]" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Icon name="ShoppingBag" className="text-[#403E43]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
          >
            <Icon name="Menu" className="text-[#403E43]" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-lg">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-[#403E43] leading-tight animate-fade-in">
              Цветы, которые{" "}
              <span className="text-[#D946EF]">рассказывают</span> историю
            </h1>
            <p className="text-[#8A898C] mb-8 text-lg animate-fade-in">
              Наши букеты — это не просто цветы, а произведения искусства,
              созданные с любовью и вниманием к деталям.
            </p>
            <div className="flex gap-4 animate-fade-in">
              <Button className="bg-[#D946EF] hover:bg-[#ba3bd2] text-white rounded-full px-6">
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

      {/* Categories Section */}
      <section className="py-16 px-4 bg-[#F6F6F7] rounded-3xl mx-4 my-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold mb-2 text-center text-[#403E43]">
            Популярные категории
          </h2>
          <p className="text-[#8A898C] mb-12 text-center max-w-2xl mx-auto">
            Мы подобрали для вас самые красивые и свежие цветы, чтобы вы могли
            выразить свои чувства через них
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden hover-scale rounded-3xl">
              <div className="aspect-[4/5] bg-[#FDE1D3] relative overflow-hidden rounded-t-3xl">
                <img
                  src="https://images.unsplash.com/photo-1561181286-d5c92b260330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                  alt="Букеты"
                  className="w-full h-full object-cover mix-blend-multiply rounded-t-3xl"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-2 text-[#403E43]">
                  Букеты
                </h3>
                <p className="text-[#8A898C]">
                  Изысканные композиции для любого случая
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden hover-scale rounded-3xl">
              <div className="aspect-[4/5] bg-[#F2FCE2] relative overflow-hidden rounded-t-3xl">
                <img
                  src="https://images.unsplash.com/photo-1531875456634-3f5418250e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                  alt="Растения"
                  className="w-full h-full object-cover mix-blend-multiply rounded-t-3xl"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-2 text-[#403E43]">
                  Растения
                </h3>
                <p className="text-[#8A898C]">
                  Живые растения для вашего дома и офиса
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden hover-scale rounded-3xl">
              <div className="aspect-[4/5] bg-[#5A3825] relative overflow-hidden rounded-t-3xl">
                <img
                  src="https://images.unsplash.com/photo-1575573333701-289fcaeb4bf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                  alt="Подарки"
                  className="w-full h-full object-cover mix-blend-multiply rounded-t-3xl"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-2 text-[#403E43]">
                  Подарки
                </h3>
                <p className="text-[#8A898C]">
                  Дополнения к букетам и композициям
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 px-4 border-t border-[#f1f0fb] rounded-t-3xl mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="font-playfair font-bold text-xl text-[#403E43]">
                  Bloom
                </div>
                <div className="text-[#D946EF] text-2xl font-thin leading-none">
                  &
                </div>
                <div className="font-playfair font-bold text-xl text-[#403E43]">
                  Petal
                </div>
              </div>
              <p className="text-[#8A898C]">
                Мы доставляем радость и красоту в виде цветов
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#403E43] mb-4">Каталог</h4>
              <ul className="space-y-2 text-[#8A898C]">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D946EF] transition-colors rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20 inline-block"
                  >
                    Букеты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D946EF] transition-colors rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20 inline-block"
                  >
                    Растения
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D946EF] transition-colors rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20 inline-block"
                  >
                    Подарки
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D946EF] transition-colors rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20 inline-block"
                  >
                    Сезонные предложения
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-[#403E43] mb-4">Информация</h4>
              <ul className="space-y-2 text-[#8A898C]">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D946EF] transition-colors rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20 inline-block"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D946EF] transition-colors rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20 inline-block"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D946EF] transition-colors rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20 inline-block"
                  >
                    Оплата
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D946EF] transition-colors rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20 inline-block"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-[#403E43] mb-4">Контакты</h4>
              <div className="space-y-2 text-[#8A898C]">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-[#D946EF]" />
                  <span className="rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20">
                    г. Москва, ул. Цветочная, 12
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-[#D946EF]" />
                  <span className="rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20">
                    +7 (123) 456-78-90
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-[#D946EF]" />
                  <span className="rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20">
                    info@bloom-petal.ru
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#f1f0fb] pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8A898C] text-sm mb-4 md:mb-0">
              © 2025 Bloom & Petal. Все права защищены
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[#FDE1D3]"
              >
                <Icon name="Instagram" size={18} className="text-[#403E43]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[#FDE1D3]"
              >
                <Icon name="Facebook" size={18} className="text-[#403E43]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[#FDE1D3]"
              >
                <Icon name="Twitter" size={18} className="text-[#403E43]" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
