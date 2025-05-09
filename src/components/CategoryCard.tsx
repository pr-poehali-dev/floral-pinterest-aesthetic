
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
}

const CategoryCard = ({ title, description, imageSrc, bgColor }: CategoryCardProps) => {
  return (
    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden hover-scale rounded-3xl">
      <div className={`aspect-[4/5] ${bgColor} relative overflow-hidden rounded-t-3xl`}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover mix-blend-multiply rounded-t-3xl"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-playfair text-xl font-bold mb-2 text-[#403E43]">
          {title}
        </h3>
        <p className="text-[#8A898C]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
