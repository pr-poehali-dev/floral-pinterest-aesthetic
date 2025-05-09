
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  colorClass?: string;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  colorClass = "bg-[#FDE1D3]" 
}: FeatureCardProps) => {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", colorClass)}>
          <Icon name={icon} size={24} className="text-[#5A3825]" />
        </div>
        <h3 className="text-lg font-medium font-playfair mb-2 text-[#403E43]">
          {title}
        </h3>
        <p className="text-[#8A898C]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
