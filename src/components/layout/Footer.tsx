import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="text-white text-center py-8 relative">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 flex-grow">
          {/* Column 1 */}
          <div className="mb-8">
            <div className="flex items-center mb-4 pl-10 pt-2">
        <Image
          src="/navbar-logo.webp"
          alt="Company Logo"
          width={50}
          height={50}
          className="h-10 w-auto ml-[5%]"
        />
      </div>
            {/* Your content for column 1 */}
            <p className="text-sm text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.
            </p>
           
           {/* Row of bank cards goes here */}
          </div>

          {/* Column 2 */}
          <div className="mb-8">
            <h2 className="text-xl uppercase text-black font-semibold mb-2">Quick Links</h2>
            {/* Your content for column 2 */}
            <ul className="text-left px-24">
              <li className="py-2">
                <Link
                  href="#"
                ><div>
<a className="text-sm text-slate-400 hover:text-orange-500">
                    About
                  </a>
                </div>
                  
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                >
                    <div>
<a className="text-sm text-slate-400 hover:text-orange-500">
                    Blogs
                  </a>
                    </div>
                  
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                >
                    <div>
<a className="text-sm text-slate-400 hover:text-orange-500">
                    Contact
                  </a>
                    </div>
                  
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                >
                    <div>
<a className="text-sm text-slate-400 hover:text-orange-500">
                    FAQ
                  </a>
                    </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-8">
            <h2 className="text-xl uppercase text-black font-semibold mb-4">Account</h2>
            {/* Your content for column 3 */}
            <ul className="text-left px-24">
              <li className="py-1">
                <Link
                  href="#"
                >
                    <div>
<a className="text-sm text-slate-400 hover:text-orange-500">
                    My Account
                  </a>
                    </div>
                  
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                >
                    <div>
<a className="text-sm text-slate-400 hover:text-orange-500">
                    Orders Tracking
                  </a>
                    </div>
                  
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                >
                    <div>
<a className="text-sm text-slate-400 hover:text-orange-500">
                    Checkout
                  </a>
                    </div>
                  
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                ><div>
<a className="text-sm text-slate-400 hover:text-orange-500">
                    Wishlist
                  </a>
                </div>
                  
                </Link>
              </li>
            </ul>
          </div>

{/* Column 4 */}
<div className="mb-8">
  <h2 className="text-xl uppercase text-black font-semibold mb-4">Newsletter</h2>
  {/* Email Subscription */}
<div className="flex items-center mb-4 gap-2">
  <input
    type="email"
    placeholder="Email"
    className="py-3 px-3 border border-gray-300 rounded-full w-full"
  />
  <button className="bg-red-700 text-white py-3 px-4 rounded-full -ml-1">
    Subscribe
  </button>
</div>


{/* Social Media Icons */}
<div className="flex space-x-4">
  {/* Facebook */}
  <FontAwesomeIcon
    icon={faFacebook}
    className="text-gray-700 bg-gray-300 rounded-full p-3 hover:bg-gray-500 hover:text-white"
  />
  {/* Twitter */}
  <FontAwesomeIcon
    icon={faTwitter}
    className="text-gray-700 bg-gray-300 rounded-full p-3 hover:bg-gray-500 hover:text-white"
  />
  {/* Youtube */}
  <FontAwesomeIcon
    icon={faYoutube}
    className="text-gray-700 bg-gray-300 rounded-full p-3 hover:bg-gray-500 hover:text-white"
  />
  {/* Instagram */}
  <FontAwesomeIcon
    icon={faInstagram}
    className="text-gray-700 bg-gray-300 rounded-full p-3 hover:bg-gray-500 hover:text-white"
  />
  {/* Pinterest */}
  <FontAwesomeIcon
    icon={faPinterest}
    className="text-gray-700 bg-gray-300 rounded-full p-3 hover:bg-gray-500 hover:text-white"
  />
</div>

</div>


        </div>
      </div>

      {/* All Rights Reserved tagline */}
      <p className="mt-8 text-sm text-slate-400">
        Borneel Bikash Phukan &copy; {new Date().getFullYear()} All Rights
        Reserved | This template is made using NextJS and TailwindCSS
      </p>
    </footer>
  );
};

export default Footer;
