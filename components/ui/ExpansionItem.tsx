import { ExpansionItemProps } from "@/types/types";

const ExpansionItem: React.FC<ExpansionItemProps> = ({
  title,
  description,
  youtubeLink,
  youtubeTitle,
}) => {
  return (
    <>
      <div className="p-1 md:px-20 w-full">
        <div className="container">
          <div
            key={0}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:my-12 my-5"
          >
            <div className="col-text md:w-96 md:mt-24">
              <h2 className="text-white md:text-4xl font-bold md:mb-4">
                {title}
              </h2>
              <div className="text-white py-2 md:mb-6">{description}</div>
              <div className="media media--youtube media--complex media--small media--padding-bottom flex text-[#fff]"></div>
            </div>
            <div className="col-image">
              <div className="mt-0 md:h-[356px] aspect-w-16">
                <iframe
                  width="810"
                  height="456"
                  src={youtubeLink}
                  title={youtubeTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpansionItem;
