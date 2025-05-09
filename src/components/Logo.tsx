
const Logo = ({ textSize = "text-2xl" }: { textSize?: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`font-playfair font-bold ${textSize} text-[#403E43]`}>
        Bloom
      </div>
      <div className={`text-[#5A3825] ${textSize === "text-2xl" ? "text-3xl" : "text-2xl"} font-thin leading-none`}>
        &
      </div>
      <div className={`font-playfair font-bold ${textSize} text-[#403E43]`}>
        Petal
      </div>
    </div>
  );
};

export default Logo;
