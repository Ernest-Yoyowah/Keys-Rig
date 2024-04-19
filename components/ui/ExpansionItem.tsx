import { ExpansionItemProps } from "@/types/types";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const ExpansionItem: React.FC<ExpansionItemProps> = ({
  title,
  description,
  youtubeLink,
  imageUrl,
}) => {
  return (
    <div className="">
      <h2 className="text-white md:text-4xl font-bold md:mb-4">{title}</h2>
      <div className="text-white py-2 md:mb-6">{description}</div>
      <div className="media media--youtube media--complex media--small media--padding-bottom flex text-[#fff]"></div>
    </div>
  );
};

export default ExpansionItem;
