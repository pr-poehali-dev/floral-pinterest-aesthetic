
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
