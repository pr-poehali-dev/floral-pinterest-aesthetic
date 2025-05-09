
import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Букеты",
      description: "Изысканные композиции для любого случая",
      imageSrc: "https://images.unsplash.com/photo-1561181286-d5c92b260330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      bgColor: "bg-[#FDE1D3]"
    },
    {
      title: "Растения",
      description: "Живые растения для вашего дома и офиса",
      imageSrc: "https://images.unsplash.com/photo-1531875456634-3f5418250e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      bgColor: "bg-[#F2FCE2]"
    },
    {
      title: "Подарки",
      description: "Дополнения к букетам и композициям",
      imageSrc: "https://images.unsplash.com/photo-1575573333701-289fcaeb4bf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      bgColor: "bg-[#5A3825]"
    }
  ];

  return (
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
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              imageSrc={category.imageSrc}
              bgColor={category.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
