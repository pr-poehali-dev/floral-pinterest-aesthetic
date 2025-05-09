
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface AnimatedButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, variant = "default", className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden group transition-all duration-300",
          variant === "default" 
            ? "bg-[#5A3825] hover:bg-[#5A3825] text-white" 
            : "bg-transparent border-[#5A3825] border text-[#403E43] hover:bg-transparent",
          "rounded-full px-6",
          className
        )}
        {...props}
      >
        <span className={cn(
          "absolute inset-0 transform transition-transform duration-300",
          variant === "default" 
            ? "bg-[#44291b] group-hover:translate-y-0 translate-y-full" 
            : "bg-[#5A3825]/10 group-hover:translate-y-0 translate-y-full"
        )}/>
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
