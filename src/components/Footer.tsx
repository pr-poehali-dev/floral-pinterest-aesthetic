
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Logo from "./Logo";
import FooterColumn from "./FooterColumn";
import FooterNavList from "./FooterNavList";
import ContactItem from "./ContactItem";

const Footer = () => {
  const catalogLinks = [
    { label: "Букеты", href: "#" },
    { label: "Растения", href: "#" },
    { label: "Подарки", href: "#" },
    { label: "Сезонные предложения", href: "#" },
  ];

  const infoLinks = [
    { label: "О нас", href: "#" },
    { label: "Доставка", href: "#" },
    { label: "Оплата", href: "#" },
    { label: "Контакты", href: "#" },
  ];

  const socialLinks = [
    { icon: "Instagram", href: "#" },
    { icon: "Facebook", href: "#" },
    { icon: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-white pt-16 pb-8 px-4 border-t border-[#f1f0fb] rounded-t-3xl mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo textSize="text-xl" />
            </div>
            <p className="text-[#8A898C]">
              Мы доставляем радость и красоту в виде цветов
            </p>
          </div>

          <FooterColumn title="Каталог">
            <FooterNavList items={catalogLinks} />
          </FooterColumn>

          <FooterColumn title="Информация">
            <FooterNavList items={infoLinks} />
          </FooterColumn>

          <FooterColumn title="Контакты">
            <div className="space-y-2 text-[#8A898C]">
              <ContactItem 
                icon="MapPin" 
                text="г. Москва, ул. Цветочная, 12" 
              />
              <ContactItem 
                icon="Phone" 
                text="+7 (123) 456-78-90" 
              />
              <ContactItem 
                icon="Mail" 
                text="info@bloom-petal.ru" 
              />
            </div>
          </FooterColumn>
        </div>

        <div className="border-t border-[#f1f0fb] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#8A898C] text-sm mb-4 md:mb-0">
            © 2025 Bloom & Petal. Все права защищены
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[#FDE1D3]"
              >
                <Icon name={link.icon} size={18} className="text-[#403E43]" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
