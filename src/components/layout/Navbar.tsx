import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showPagesSubNav, setShowPagesSubNav] = useState<boolean>(false);
  const [showMobilePagesSubNav, setMobileShowPagesSubNav] = useState<boolean>(false);
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
          className={` hover:text-gray-300 uppercase ${selectedLink === "Home" ? "selected" : ""}`}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </Link>

        <div
          className="relative"
        >
          <a
            href="#"
            className={` hover:text-gray-300 uppercase ${selectedLink === "Pages" ? "selected" : ""}`}
            onClick={() => handleLinkClick("Pages")}
          >
            Women
          </a>

        </div>

        <a
          href="/Portfolio"
          className={` hover:text-gray-300 uppercase ${selectedLink === "Portfolios" ? "selected" : ""}`}
          onClick={() => handleLinkClick("Portfolios")}
        >
          Men
        </a>

        <Link
          href="#"
          className={` hover:text-gray-300 uppercase ${selectedLink === "Our-Team" ? "selected" : ""}`}
          onClick={() => handleLinkClick("Our-Team")}
        >
          Shop
        </Link>

        <div className="relative">
          <a
            href="#"
            onMouseEnter={() => setShowPagesSubNav(true)}
            onMouseLeave={() => setShowPagesSubNav(false)}
            className={` hover:text-gray-300 uppercase ${selectedLink === "News" ? "selected" : ""}`}
            onClick={() => handleLinkClick("News")}
          >
            Pages
          </a>

          {showPagesSubNav && (
            <ul
              className="absolute left-0 mt-1 text-sm px-5 bg-slate-100 border rounded border-white w-52"
              onMouseEnter={() => setShowPagesSubNav(true)}
              onMouseLeave={() => setShowPagesSubNav(false)}
              style={{ top: "80%" }}
            >
              <li className="py-2">
                <Link className="text-black hover:text-red-700" href="/AboutUs">
                  Product Details
                </Link>
              </li>
              <li className="py-2">
                <Link className="text-black hover:text-red-700" href="/ContactUs">
                  Show Cart
                </Link>
              </li>
              <li className="py-2">
                <Link className="text-black hover:text-red-700" href="/Services">
                  Checkout
                </Link>
              </li>
              <li className="py-2">
                <Link className="text-black hover:text-red-700" href="/Testimonials">
                  Blog Details
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="relative">
          <a
            href="#"
            className={` hover:text-gray-300 uppercase ${selectedLink === "Pages" ? "selected" : ""}`}
            onClick={() => handleLinkClick("Pages")}
          >
            Blog
          </a>
        </div>

<div className="relative">
          <a
            href="#"
            className={` hover:text-gray-300 uppercase ${selectedLink === "Pages" ? "selected" : ""}`}
            onClick={() => handleLinkClick("Pages")}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {showMobileMenu && (
        <div className="lg:hidden flex flex-col mt-1 space-y-2">
          <Link
            href="/"
            className={` hover:text-gray-300 uppercase ${selectedLink === "Home" ? "selected" : ""}`}
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
              className={` hover:text-red-700 uppercase ${selectedLink === "Women" ? "selected" : ""}`}
              onClick={() => {
                handleLinkClick("Women");
                toggleSubNavPages();
              }}
            >
              WOMEN
            </a>
          </div>

          <div className="relative">
            <a
              href="#"
              className={` hover:text-red-700 uppercase ${selectedLink === "Men" ? "selected" : ""}`}
              onClick={() => {
                handleLinkClick("Men");
                toggleMobileMenu();
              }}
            >
              MEN
            </a>
          </div>

          <div className="relative">
            <a
              href="#"
              className={` hover:text-red-700 uppercase ${selectedLink === "Shop" ? "selected" : ""}`}
              onClick={() => {
                handleLinkClick("Shop");
                toggleSubNavPages();
              }}
            >
              SHOP
            </a>
          </div>

          <div className="relative">
            <a
              href="#"
              className={` hover:text-red-700 uppercase ${selectedLink === "Pages" ? "selected" : ""}`}
              onClick={() => {
                handleLinkClick("Pages");
                toggleSubNavNews();
              }}
            >
              PAGES
            </a>
            {showMobileNewsSubNav && (
              <ul className="relative left-0 mt-2 text-sm px-5 w-full">
                <li className="py-2">
                  <Link href="/ProductDetails" className=" hover:text-red-700">
                    Product Details
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/ShowCart" className=" hover:text-red-700">
                    Show Cart
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/Checkout" className=" hover:text-red-700">
                    Checkout
                  </Link>
                </li>
                <li className="py-2">
                  <a href="/BlogDetails" className=" hover:text-red-700">
                    Blog Details
                  </a>
                </li>
              </ul>
            )}

            <div className="relative">
            <a
              href="#"
              className={` hover:text-red-700 uppercase ${selectedLink === "Blog" ? "selected" : ""}`}
              onClick={() => {
                handleLinkClick("Blog");
                toggleSubNavPages();
              }}
            >
              BLOG
            </a>
          </div>

          <div className="relative">
            <a
              href="#"
              className={` hover:text-red-700 uppercase ${selectedLink === "Contact" ? "selected" : ""}`}
              onClick={() => {
                handleLinkClick("Contact");
                toggleSubNavPages();
              }}
            >
              CONTACT
            </a>
          </div>
          </div>
        </div>
      )}


      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden flex items-center justify-end m-1">
        <button
          onClick={toggleMobileMenu}
          className=" hover:text-red-700 focus:outline-none pb-2"
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
