import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark">
      <section className="container-page">
        <div className="flex flex-col items-center justify-center py-[55px] border-b border-darkGrey">
          <h2 className="text-white section-heading-4">Excellent</h2>
          <div className="flex items-center gap-2 mt-4">
            <img src="/assets/icons/star.svg" className='max-sm:w-[18%]' alt="" />
            <img src="/assets/icons/star.svg" className='max-sm:w-[18%]' alt="" />
            <img src="/assets/icons/star.svg" className='max-sm:w-[18%]' alt="" />
            <img src="/assets/icons/star.svg" className='max-sm:w-[18%]' alt="" />
            <img src="/assets/icons/star.svg" className='max-sm:w-[18%]' alt="" />
          </div>
          <p className="mt-3 section-desc-1">
            Based on
            <strong className="border-b border-white ml-2">13,586 reviews</strong>
          </p>
          <img src="/assets/img/logo-footer.png" alt="" className="mt-3 w-[114px] h-7 object-cover" />
        </div>
        <div className="grid grid-cols-5 items-start mt-[55px] mb-[29px] max-lg:w-[650px] max-lg:mx-auto max-lg:grid-cols-3 max-md:w-[90%] max-md:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <h3 className="mb-6 text-white section-heading-4">Customer Service</h3>
            <ul>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Order Lookup
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Returns
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Corporate Gifting
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom__wrap">
            <h3 className="mb-6 text-white section-heading-4">About Us</h3>
            <ul>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  News & Blog
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Press Center
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Investors
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Suppliers
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom__wrap">
            <h3 className="mb-6 text-white section-heading-4">Credit Card</h3>
            <ul>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Gift Cards Balance
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Shop with Points
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Reload Your Balance
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom__wrap">
            <h3 className="mb-6 text-white section-heading-4">Sell</h3>
            <ul>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Start Selling
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Learn to Sell
                </a>
              </li>
              <li>
                <a href="#!" className="text-lighter2 leading-relaxed mt-2 inline-block">
                  Affiliates & Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-white section-heading-4">Follow us</h3>
            <div className="flex items-center gap-3">
              <a
                href="#!"
                className="w-[36px] h-[36px] flex items-center justify-center bg-darkGrey transition-all hover:bg-green"
              >
                <img src="/assets/icons/fb-icon.svg" alt="" />
              </a>
              <a
                href="#!"
                className="w-[36px] h-[36px] flex items-center justify-center bg-darkGrey transition-all hover:bg-green"
              >
                <img src="/assets/icons/in-icon.svg" alt="" />
              </a>
              <a
                href="#!"
                className="w-[36px] h-[36px] flex items-center justify-center bg-darkGrey transition-all hover:bg-green"
              >
                <img src="/assets/icons/twiter-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-yellowLighter">
        <div className="container-page">
          <div className="flex items-center justify-between py-[28px] max-md:flex-col max-md:gap-5">
            <Link to="/" className="w-[100px]">
              <img src="/assets/img/logo.png" className="w-full h-full object-cover" alt="" />
            </Link>
            <div className="flex items-center gap-7">
              <a href="#!">
                <img src="/assets/img/paypal.png" alt="" className="h-[18px]" />
              </a>
              <a href="#!">
                <img src="/assets/img/visa.png" alt="" className="h-[18px]" />
              </a>
              <a href="#!">
                <img src="/assets/img/masterCart.png" alt="" className="h-[18px]" />
              </a>
            </div>
            <p className="text-light">Copyright © 2024 Daddy Work Team</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
