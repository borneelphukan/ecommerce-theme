import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showMobilePagesSubNav, setMobileShowPagesSubNav] = useState<boolean>(false);
  const [showPagesNav, setPagesNav] = useState<boolean>(false);
  const [showMobileNewsSubNav, setMobileNewsSubNav] = useState<boolean>(false);

  const handleLinkClick = (linkText: string) => {
    setSelectedLink(linkText);
  };

  useEffect(() => {
    setSelectedLink("Home"); // Set the initial selected link here if needed.
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  const toggleSubNavPages = () => {
    setMobileShowPagesSubNav(!showMobilePagesSubNav);
  };

  const toggleSubNavNews = () => {
    setMobileNewsSubNav(!showMobileNewsSubNav);
  };

  return (
    <nav className="relative top-0 left-0 w-full py-1 px-6 flex flex-col">
      {/* Company Logo */}
      <div className="flex items-center mb-4 pl-10 pt-2">
        <Image
          src="/navbar-logo.webp"
          alt="Company Logo"
          width={50}
          height={50}
          className="h-10 w-auto ml-[5%]"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex justify-center space-x-8 mt-4">
        <Link
          href="/"
          className={`text-black hover:text-gray-300 uppercase ${selectedLink === "Home" ? "selected" : ""}`}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </Link>

        <div className="relative">
          <a
            href="#"
            className={`text-black hover:text-gray-300 uppercase ${selectedLink === "Pages" ? "selected" : ""}`}
            onClick={() => handleLinkClick("Pages")}
          >
            Women
          </a>
        </div>

        <a
          href="#"
          className={`text-black hover:text-gray-300 uppercase ${selectedLink === "Portfolios" ? "selected" : ""}`}
          onClick={() => handleLinkClick("Portfolios")}
        >
          Men
        </a>

        <Link
          href="#"
          className={`text-black hover:text-gray-300 uppercase ${selectedLink === "Our-Team" ? "selected" : ""}`}
          onClick={() => handleLinkClick("Our-Team")}
        >
          Shop
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setPagesNav(true)}
          onMouseLeave={() => setPagesNav(false)}
        >
          <a
            href="#"
            className={`text-black hover:text-gray-300 uppercase ${selectedLink === "News" ? "selected" : ""}`}
            onClick={() => handleLinkClick("News")}
          >
            Pages
          </a>
          {showPagesNav && (
            <ul
              className="absolute left-0 mt-2 text-sm px-5 bg-slate-100 border rounded border-white w-52"
              onMouseEnter={() => setPagesNav(true)}
              onMouseLeave={() => setPagesNav(false)}
              style={{ top: "80%" }}
            >
              <li className="py-2">
                <a href="#" className="text-black hover:text-orange-500">
                  Product Details
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-orange-500">
                  Shop Cart
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-orange-500">
                  Checkout
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-orange-500">
                  Blog Details
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="flex justify-center lg:mt-0">
          <Link
            href="/ContactUs"
            className="bg-orange-600 text-white hover:bg-orange-800 ml-5 mb-3 p-2 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {showMobileMenu && (
        <div className="lg:hidden flex flex-col mt-1 space-y-2">
          <Link
            href="/"
            className={`text-white hover:text-gray-300 ${selectedLink === "Home" ? "selected" : ""}`}
            onClick={() => {
              handleLinkClick("Home");
              toggleMobileMenu();
            }}
          >
            Home
          </Link>

          <div className="relative">
            <a
              href="#"
              className={`text-white hover:text-orange-500 ${selectedLink === "Pages" ? "selected" : ""}`}
              onClick={() => {
                handleLinkClick("Pages");
                toggleSubNavPages();
              }}
            >
              Pages
            </a>

            {showMobilePagesSubNav && (
              <ul className="relative left-0 mt-2 text-sm px-5 bg-black w-full">
                <li className="py-2">
                  <Link href="/AboutUs" className="text-white hover:text-orange-500">
                    About Us
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/ContactUs" className="text-white hover:text-orange-500">
                    Contact Us
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/Services" className="text-white hover:text-orange-500">
                    Services
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/Testimonials" className="text-white hover:text-orange-500">
                    Testimonials
                  </Link>
                </li>
                <li className="py-2">
                  <a href="/Error404" className="text-white hover:text-orange-500">
                    Error 404
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div className="relative">
            <a
              href="#"
              className={`text-white hover:text-orange-500 ${selectedLink === "Pages" ? "selected" : ""}`}
              onClick={() => {
                handleLinkClick("Pages");
                toggleMobileMenu();
              }}
            >
              Portfolio
            </a>
          </div>

          <div className="relative">
            <a
              href="#"
              className={`text-white hover:text-orange-500 ${selectedLink === "Pages" ? "selected" : ""}`}
              onClick={() => {
                handleLinkClick("Pages");
                toggleSubNavNews();
              }}
            >
              News
            </a>
            {showMobileNewsSubNav && (
              <ul className="relative left-0 mt-2 text-sm px-5 bg-black w-full">
                <li className="py-2">
                  <Link href="/Classic" className="text-white hover:text-orange-500">
                    Classic
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/Grid" className="text-white hover:text-orange-500">
                    Grid
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/Masonry" className="text-white hover:text-orange-500">
                    Masonry
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/Timeline" className="text-white hover:text-orange-500">
                    Timeline
                  </Link>
                </li>
                <li className="py-2">
                  <a href="/SinglePost" className="text-white hover:text-orange-500">
                    Single
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden flex items-center justify-end m-1">
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-orange-500 focus:outline-none pb-2"
          aria-label="Open Mobile Menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {showMobileMenu ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 5h22v2H1V5zm0 7h22v2H1v-2zm0 7h22v2H1v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 5h22v2H1V5zm0 7h22v2H1v-2zm0 7h22v2H1v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Style for the underline */}
      <style jsx>
        {`
          .selected::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #ff6600;
            margin-top: 10px;
          }
          #strike:hover::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #ff6600;
            margin-top: 10px;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
