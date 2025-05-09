
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  imageSrc?: string;
  initials: string;
  date: string;
}

const TestimonialCard = ({
  name,
  text,
  rating,
  imageSrc,
  initials,
  date
}: TestimonialCardProps) => {
  return (
    <Card className="bg-white border-none shadow-md h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-[#FDE1D3]">
              {imageSrc ? (
                <AvatarImage src={imageSrc} alt={name} />
              ) : null}
              <AvatarFallback className="bg-[#5A3825] text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium text-[#403E43]">{name}</h4>
              <p className="text-sm text-[#8A898C]">{date}</p>
            </div>
          </div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon 
                key={i} 
                name="Star" 
                size={16} 
                className={i < rating ? "text-[#5A3825] fill-[#5A3825]" : "text-[#C8C8C9]"} 
              />
            ))}
          </div>
        </div>
        
        <p className="text-[#403E43] italic flex-grow">"{text}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
