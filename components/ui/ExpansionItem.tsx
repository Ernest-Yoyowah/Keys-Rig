import { ExpansionItemProps } from "@/types/types";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const ExpansionItem: React.FC<ExpansionItemProps> = ({
  title,
  description,
  youtubeLink,
  imageUrl,
}) => {
  return (
    <div className="col-text w-[15rem] md:w-96 justify-center items-center p-5 md:p-0">
      <h2 className="text-white md:text-4xl font-bold mb-4">{title}</h2>
      <div className="text-white  md:mb-6">{description}</div>
      <div className="media media--youtube media--complex media--small media--padding-bottom flex text-[#fff]">
        <a
          href={youtubeLink}
          className="media__link"
          title="Watch now"
          data-type="video"
          data-content="7181"
        >
          <div className="media__thumb w-20">
            <span className="icon icon--small">
              <PlayCircleIcon />
            </span>
          </div>
          <div className="media__text">Watch now</div>
        </a>
      </div>
    </div>
  );
};

export default ExpansionItem;
