
interface FooterNavListProps {
  items: { label: string; href: string }[];
}

const FooterNavList = ({ items }: FooterNavListProps) => {
  return (
    <ul className="space-y-2 text-[#8A898C]">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="hover:text-[#5A3825] transition-colors rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20 inline-block"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavList;
