
import { useRef } from "react";
import { cn } from "@/lib/utils";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-in";
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimatedSection = ({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  className,
  ...props
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold });

  // Карта анимаций
  const animationClasses = {
    "fade-up": "transition-all duration-700 ease-out transform translate-y-8 opacity-0",
    "fade-in": "transition-all duration-700 ease-out opacity-0",
    "scale-in": "transition-all duration-700 ease-out transform scale-95 opacity-0",
    "slide-in": "transition-all duration-700 ease-out transform translate-x-8 opacity-0"
  };

  // Выбираем класс анимации
  const animationClass = animationClasses[animation];

  // Динамический стиль для задержки
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={cn(
        isInView ? "" : animationClass,
        "will-change-transform",
        className
      )}
      style={isInView ? {} : delayStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
