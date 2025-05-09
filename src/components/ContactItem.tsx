
import Icon from "@/components/ui/icon";

interface ContactItemProps {
  icon: string;
  text: string;
}

const ContactItem = ({ icon, text }: ContactItemProps) => {
  return (
    <p className="flex items-center gap-2">
      <Icon name={icon} size={16} className="text-[#5A3825]" />
      <span className="rounded-full px-2 py-1 hover:bg-[#FDE1D3]/20">
        {text}
      </span>
    </p>
  );
};

export default ContactItem;
