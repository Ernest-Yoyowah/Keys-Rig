import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1d] text-white py-16 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Shop & Service</h3>
            <ul>
              <li className="mb-2">
                <a href="/shop-information/" className="hover:underline">
                  Shop Info & FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="/my-account/" className="hover:underline">
                  My Account & Order History
                </a>
              </li>
              <li className="mb-2">
                <a href="/dealers/" className="hover:underline">
                  Find a Dealer
                </a>
              </li>
              <li className="mb-2">
                <a href="/native-access/" className="hover:underline">
                  Native Access
                </a>
              </li>
            </ul>
            <a
              href="/shipping-fees-payment/"
              className="block mt-4 text-sm text-gray-400 hover:underline"
            >
              Free Shipping*
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-8 mb-4">Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-[#2a2c2e] text-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#ff4c4c] rounded hover:bg-[#ff3333] text-white"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="/blog/" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="/company/" className="hover:underline">
                  Corporate Info
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact/" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/careers/" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="/press/" className="hover:underline">
                  Press Area
                </a>
              </li>
              <li className="mb-2">
                <a href="/education/" className="hover:underline">
                  Education
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-4 text-gray-400">
              For inquiries and support, reach out to us through our social
              media channels or contact form.
            </p>
            <a
              href="/contact/"
              className="block text-[#ff4c4c] hover:underline"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Keys Rig GmbH. All rights reserved.</p>
          <p>
            <a href="/legal-information/" className="hover:underline">
              Legal Information
            </a>{" "}
            |{" "}
            <a href="/privacy-policy/" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Manage Cookies
            </a>{" "}
            |{" "}
            <a href="/contact/" className="hover:underline">
              Contact
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
