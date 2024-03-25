import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer bg-[#2a2c2e] text-white py-10 md:py-20 text-lg font-serif"
    >
      <div className="footer-primary container mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="column1">
            <span className="footer-column-headline headline-shop-service">
              Shop &amp; service
            </span>
            <ul className="text-base">
              <li className="mb-2">
                <a href="/en/shop-information/">Shop info &amp; faq</a>
              </li>
              <li className="mb-2">
                <a href="https://www.native-instruments.com/en/my-account/">
                  My account &amp; order history
                </a>
              </li>
              <li className="mb-2">
                <a href="/en/company/resellers/">Find a dealer</a>
              </li>
              <li className="mb-2">
                <a href="/en/specials/native-access-2/">Native Access</a>
              </li>
            </ul>
            <span>
              <a
                className="freeshipping country-gh"
                href="/en/shop-information/shipping-fees-payment/"
              >
                <span className="freeshipping__text">Free shipping*</span>
                <span className="freeshipping__logos"></span>
              </a>
            </span>
          </div>
          <div className="column2">
            <span className="footer-column-headline hidden md:block">
              Connect with us
            </span>
            <ul className="flex items-center">
              <li className="mr-4">
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
            <span className="footer-column-headline headline-newsletter">
              Newsletter subscription
            </span>
            <ul className="newsletter-container text-base">
              <li>{/* Newsletter form goes here */}</li>
            </ul>
          </div>
          <div className="column3">
            <span className="footer-column-headline">Company</span>
            <ul className="text-base">
              <li className="mb-2">
                <a href="https://blog.native-instruments.com/">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/en/company/">Corporate info</a>
              </li>
              <li className="mb-2">
                <a href="/en/company/ni-locations/">Contact us</a>
              </li>
              <li className="mb-2">
                <a href="/en/careers/">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/en/press-area/">Press area</a>
              </li>
              <li className="mb-2">
                <a href="/en/company/education-program/">Education</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-secondary bg-[#333] pt-4 pb-2 text-sm">
        <div className="container-fluid mx-auto">
          <ul className="text-center">
            <li className="inline-block mr-6">&copy; 2024 Keys Rig GmbH</li>
            <li className="inline-block mr-6">
              <a href="/en/company/legal-information/">Legal Information</a> |{" "}
              <a href="/en/company/legal-information/privacy-policy/">
                Privacy Policy
              </a>
              <span data-cookie-consent-toggle="" className="hide">
                | <a href="#">Manage Cookies</a>
              </span>{" "}
              | <a href="/en/company/ni-locations/">Contact</a>
            </li>
            <li className="inline-block lang-switcher">
              <a href="/en/" data-code="en" rel="alternate" hreflang="en">
                English
              </a>{" "}
              |{" "}
              <a href="/de/" data-code="de" rel="alternate" hreflang="de">
                Deutsch
              </a>{" "}
              |{" "}
              <a href="/jp/" data-code="jp" rel="alternate" hreflang="ja">
                日本語
              </a>{" "}
              |{" "}
              <a href="/fr/" data-code="fr" rel="alternate" hreflang="fr">
                Français
              </a>{" "}
              |{" "}
              <a href="/es/" data-code="es" rel="alternate" hreflang="es">
                Español
              </a>{" "}
              |{" "}
              <a href="/zh/" data-code="zh" rel="alternate" hreflang="zh">
                简体中文
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
