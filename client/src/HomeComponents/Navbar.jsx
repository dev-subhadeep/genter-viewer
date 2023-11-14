import React, { useState } from "react";
import { LandingPage } from "../Pages/LandingPage/LandingPage";

const Navbar = () => {
  const [isDivVisible, setDivVisibility] = useState(false);
  const handleButtonClick = () => {
    setDivVisibility(!isDivVisible);
  };

  

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <p className="text-white text-2xl font-bold">Genter Viewer</p>

        {/* Navigation Links */}
        <button
          onClick={handleButtonClick}
          className="text-white border-white border-2 rounded-xl p-2 hover:text-white hover:bg-green-500 transition-colors"
        >
          Start Interview
        </button>

        {isDivVisible && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 p-10 rounded-xl z-10 w-full md:w-1/2 text-white">
            <button style={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }} onClick={handleButtonClick}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M20.48 3.512a11.966 11.966 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.966 11.966 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487zm-1.542 15.427a9.789 9.789 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.789 9.789 0 0 1 2.876-6.943a9.786 9.786 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.785 9.785 0 0 1-2.876 6.942z"
                />
                <path
                  fill="currentColor"
                  d="m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"
                />
              </svg>
            </button>
            <LandingPage />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
