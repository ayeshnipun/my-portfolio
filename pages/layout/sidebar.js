import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaStackOverflow,
  FaMediumM,
} from "react-icons/fa";

const Sider = () => {
  return (
    <>
      <div className="px-8 h-full flex flex-col flex-grow items-center">
        <ul className="mt-12">
          <li>
            <a
              href="#"
              className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
            >
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Home
              </span>
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
            >
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                About
              </span>
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
            >
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Portfolio
              </span>
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
            >
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Skills
              </span>
            </a>
          </li>

          <li>
            <a
              href="#blogs"
              className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
            >
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Blogs
              </span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
            >
              <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                Contact
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="px-8 justify-center items-center">
        <ul className="w-full flex items-center bg-gray-800 text-xl">
          <li className="pt-5 pb-3 mr-5">
            <a
              className=""
              href="https://nipun-yesh.medium.com/"
              target="blank"
            >
              <FaMediumM className="text-gray-500 hover:text-gray-200" />
            </a>
          </li>
          <li className="pt-5 pb-3 mr-5">
            <a className="" href="https://twitter.com/bladeB0ss" target="blank">
              <FaTwitter className="text-gray-500 hover:text-gray-200" />
            </a>
          </li>
          <li className="pt-5 pb-3 mr-5">
            <a
              className=""
              href="https://www.linkedin.com/in/ayeshnipun/"
              target="blank"
            >
              <FaLinkedinIn className="text-gray-500 hover:text-gray-200" />
            </a>
          </li>
          <li className="pt-5 pb-3 mr-5">
            <a
              className=""
              href="https://www.instagram.com/bl_ad_e/"
              target="blank"
            >
              <FaInstagram className="text-gray-500 hover:text-gray-200" />
            </a>
          </li>
          <li className="pt-5 pb-3 mr-5">
            <a
              className=""
              href="https://stackoverflow.com/users/11142587/ayesh-nipun"
              target="blank"
            >
              <FaStackOverflow className="text-gray-500 hover:text-gray-200" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sider;
