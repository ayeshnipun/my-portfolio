import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaStackOverflow,
  FaMediumM,
  FaAngleDoubleLeft,
  FaBars,
} from "react-icons/fa";
import Scrollspy from "react-scrollspy";

const SideBar = () => {
  const hideSideBar = () => {
    window.document.querySelector("#sidebar").classList.toggle("hidden");
    window.document.querySelector("#sidebarshow").classList.toggle("z-10");
  };
  const showSideBar = () => {
    window.document.querySelector("#sidebar").classList.remove("hidden");
    window.document.querySelector("#sidebarshow").classList.remove("z-10");
  };
  return (
    <>
      <div
        id="sidebarshow"
        className="fixed text-4xl top-5 left-4 lg:hidden md:hidden"
      >
        <FaBars
          className="text-gray-500 hover:text-gray-200 cursor-pointer"
          onClick={showSideBar}
        />
      </div>
      <aside id="sidebar" className="h-screen w-72 sticky top-0 bg-gray-900">
        <div className="grid h-1/6 justify-end px-5 pt-5">
          <FaAngleDoubleLeft
            className="text-gray-500 hover:text-gray-200 lg:hidden md:hidden"
            onClick={hideSideBar}
          />
        </div>
        <div className="grid place-items-center h-4/6">
          <Scrollspy
            items={["home", "about", "portfolio", "skills", "blogs", "contact"]}
            currentClassName="is-current"
            className=""
            offset={-200}
          >
            <li>
              <a
                href="#home"
                className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
              >
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-raleway">
                  Home
                </span>
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
              >
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-raleway">
                  About
                </span>
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
              >
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-raleway">
                  Portfolio
                </span>
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
              >
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-raleway">
                  Skills
                </span>
              </a>
            </li>

            <li>
              <a
                href="#blogs"
                className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
              >
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-raleway">
                  Blogs
                </span>
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
              >
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-raleway">
                  Contact
                </span>
              </a>
            </li>
          </Scrollspy>
        </div>

        <div className="grid place-items-center h-1/6">
          <ul className="w-full flex justify-center bg-gray-900 text-xl">
            <li className="pt-5 pb-3 mr-5">
              <a
                className=""
                href="https://nipun-yesh.medium.com/"
                target="blank"
              >
                <FaMediumM className="text-gray-500 hover:text-gray-200 h-4 w-4" />
              </a>
            </li>
            <li className="pt-5 pb-3 mr-5">
              <a
                className=""
                href="https://twitter.com/bladeB0ss"
                target="blank"
              >
                <FaTwitter className="text-gray-500 hover:text-gray-200 h-4 w-4" />
              </a>
            </li>
            <li className="pt-5 pb-3 mr-5">
              <a
                className=""
                href="https://www.linkedin.com/in/ayeshnipun/"
                target="blank"
              >
                <FaLinkedinIn className="text-gray-500 hover:text-gray-200 h-4 w-4" />
              </a>
            </li>
            <li className="pt-5 pb-3 mr-5">
              <a
                className=""
                href="https://www.instagram.com/bl_ad_e/"
                target="blank"
              >
                <FaInstagram className="text-gray-500 hover:text-gray-200 h-4 w-4" />
              </a>
            </li>
            <li className="pt-5 pb-3 mr-5">
              <a
                className=""
                href="https://stackoverflow.com/users/11142587/ayesh-nipun"
                target="blank"
              >
                <FaStackOverflow className="text-gray-500 hover:text-gray-200 h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
