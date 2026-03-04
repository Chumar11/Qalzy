import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className=" px-4 lg:px-16 ">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <a
              href="/"
              className="text-2xl md:text-3xl font-light tracking-wider text-gray-800"
            >
              <img
                src="/image/logo/logo.png"
                alt="Qalzy Logo"
                className="h-8 md:h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <a
              href="#scale"
              className="text-[16px] font-normal leading-[100%] tracking-[0.04em] text-center text-[#0E1318] hover:text-gray-900 transition-colors duration-200"
              style={{ fontFamily: "Helvetica" }}
            >
              AI Scale
            </a>
            <a
              href="#tracking"
              className="text-[16px] font-normal leading-[100%] tracking-[0.04em] text-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
              style={{ fontFamily: "Helvetica" }}
            >
              Calorie Tracking App
            </a>
            <a
              href="#blog"
              className="text-[16px] font-normal leading-[100%] tracking-[0.04em] text-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
              style={{ fontFamily: "Helvetica" }}
            >
              Blog
            </a>
            <a
              href="#shop"
              className="text-[16px] font-normal leading-[100%] tracking-[0.04em] text-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
              style={{ fontFamily: "Helvetica" }}
            >
              Shop
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <a
                href="#scale"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                AI Scale
              </a>
              <a
                href="#tracking"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Calorie Tracking App
              </a>
              <a
                href="#blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Blog
              </a>
              <a
                href="#shop"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Shop
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
