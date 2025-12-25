import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navlist = [
    { title: "Home", link: "" },
    { title: "Interests", link: "interests" },
    { title: "Contact Us", link: "contact" },
  ];

  return (
    <nav className="w-full bg-[#283842]">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="sr-only">Open main menu</span>

              {/* Hamburger */}
              {!mobileOpen && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}

              {/* Close */}
              {mobileOpen && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Left section */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navlist.map((item) => (
                  <Link to={`/${item.link}`} className="pt-2 pl-4">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>

      {/* Mobile menu */}
      <Disclosure>
        {mobileOpen && (
          <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
            {navlist.map((item) => (
              <Link
                to={`/${item.link}`}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </Disclosure>
    </nav>
  );
}

export default Navbar;

/*              <a
                key={item}
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                {item}
              </a> */
