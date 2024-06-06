import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h2 className="text-lg font-bold">LOGO</h2>
            <p className="text-sm">SLOGAN COMPANY</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end w-full md:w-auto space-x-8">
            <div className="space-y-2">
              <a href="#" className="text-sm block">
                WEEBLY THEMES
              </a>
              <a href="#" className="text-sm block">
                PRE-SALE FAQS
              </a>
              <a href="#" className="text-sm block">
                SUBMIT A TICKET
              </a>
            </div>
            <div className="space-y-2">
              <a href="#" className="text-sm block">
                SERVICES
              </a>
              <a href="#" className="text-sm block">
                THEME TWEAK
              </a>
            </div>
            <div className="space-y-2">
              <a href="#" className="text-sm block">
                SHOWCASE
              </a>
              <a href="#" className="text-sm block">
                WIDGETKIT
              </a>
              <a href="#" className="text-sm block">
                SUPPORT
              </a>
            </div>
            <div className="space-y-2">
              <a href="#" className="text-sm block">
                ABOUT US
              </a>
              <a href="#" className="text-sm block">
                CONTACT US
              </a>
              <a href="#" className="text-sm block">
                AFFILIATES
              </a>
              <a href="#" className="text-sm block">
                RESOURCES
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-xl">
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>
          <a href="#" className="text-xl">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          <a href="#" className="text-xl">
            <FontAwesomeIcon icon={["fab", "rss"]} />
          </a>
          <a href="#" className="text-xl">
            <FontAwesomeIcon icon={["fab", "google-plus"]} />
          </a>
          <a href="#" className="text-xl">
            <FontAwesomeIcon icon="ellipsis-h" />
          </a>
        </div>
        <p className="text-center text-sm mt-6">
          ©Copyright. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
