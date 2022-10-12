import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaStackOverflow,
  FaMediumM,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
        <div className="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
          <div className="h-20"></div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow align-middle">
            <ul className="flex-col py-6 space-y-1">
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
              {/* <li>
                <a
                  href="#"
                  class="relative text-center flex justify-center flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent pr-6"
                >
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                    Inbox
                  </span>
                  <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-blue-100 rounded-full">
                    New
                  </span>
                </a>
              </li> */}
            </ul>
          </div>

          <div className="items-end h-10 mb-7 text-center">
            <ul className="inline-block">
              <li className="inline-block mr-5">
                <a
                  className=""
                  href="https://nipun-yesh.medium.com/"
                  target="blank"
                >
                  <FaMediumM className="text-gray-500 hover:text-gray-200" />
                </a>
              </li>
              <li className="inline-block mr-5">
                <a
                  className=""
                  href="https://twitter.com/bladeB0ss"
                  target="blank"
                >
                  <FaTwitter className="text-gray-500 hover:text-gray-200" />
                </a>
              </li>
              <li className="inline-block mr-5">
                <a
                  className=""
                  href="https://www.linkedin.com/in/ayeshnipun/"
                  target="blank"
                >
                  <FaLinkedinIn className="text-gray-500 hover:text-gray-200" />
                </a>
              </li>
              <li className="inline-block mr-5">
                <a
                  className=""
                  href="https://www.instagram.com/bl_ad_e/"
                  target="blank"
                >
                  <FaInstagram className="text-gray-500 hover:text-gray-200" />
                </a>
              </li>
              <li className="inline-block mr-5">
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
        </div>
      </div>
    </div>
  );
};

export default SideBar;
