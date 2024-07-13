import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
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
              Shop &amp; Service
            </span>
            <ul className="text-base">
              <li className="mb-2">
                <a href="/shop-information/">Shop Info &amp; FAQ</a>
              </li>
              <li className="mb-2">
                <a href="/my-account/">My Account &amp; Order History</a>
              </li>
              <li className="mb-2">
                <a href="/dealers/">Find a Dealer</a>
              </li>
              <li className="mb-2">
                <a href="/native-access/">Native Access</a>
              </li>
            </ul>
            <span>
              <a
                className="freeshipping country-gh"
                href="/shipping-fees-payment/"
              >
                <span className="freeshipping__text">Free Shipping*</span>
                <span className="freeshipping__logos"></span>
              </a>
            </span>
          </div>
          <div className="column2">
            <span className="footer-column-headline hidden md:block">
              Connect with Us
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
              <li className="mr-4">
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
            <span className="footer-column-headline headline-newsletter">
              Newsletter Subscription
            </span>
            <ul className="newsletter-container text-base">
              <li>{/* Newsletter form goes here */}</li>
            </ul>
          </div>
          <div className="column3">
            <span className="footer-column-headline">Company</span>
            <ul className="text-base">
              <li className="mb-2">
                <a href="/blog/">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/company/">Corporate Info</a>
              </li>
              <li className="mb-2">
                <a href="/contact/">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/careers/">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/press/">Press Area</a>
              </li>
              <li className="mb-2">
                <a href="/education/">Education</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-secondary bg-[#333] pt-4 pb-2 text-sm">
        <div className="container-fluid mx-auto">
          <ul className="text-center">
            <li className="inline-block mr-6">&copy; 2024 Music Tech</li>
            <li className="inline-block mr-6">
              <a href="/legal-information/">Legal Information</a> |{" "}
              <a href="/privacy-policy/">Privacy Policy</a>
              <span data-cookie-consent-toggle="" className="hide">
                | <a href="#">Manage Cookies</a>
              </span>{" "}
              | <a href="/contact/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
