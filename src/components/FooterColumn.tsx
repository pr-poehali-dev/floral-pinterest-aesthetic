
interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div>
      <h4 className="font-medium text-[#403E43] mb-4">{title}</h4>
      {children}
    </div>
  );
};

export default FooterColumn;
