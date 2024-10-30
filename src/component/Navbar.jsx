import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="font-sans fixed top-4 left-1/2 transform -translate-x-1/2 w-full md:w-4/5 lg:w-3/4 flex items-center justify-between bg-accent bg-opacity-70 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg z-30">
        <div className="text-lg font-semibold text-dark">PLC</div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-dark focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-dark hover:text-primary">
            Home
          </a>
          <a href="#about" className="text-dark hover:text-primary">
            Tentang Kami
          </a>
          <a href="#post" className="text-dark hover:text-primary">
            Postingan
          </a>
          <a href="#contact" className="text-dark hover:text-primary">
            Kontak Kami
          </a>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 h-full w-64 bg-accent shadow-lg p-5 z-50">
            <button onClick={toggleMenu} className="text-dark focus:outline-none mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-dark hover:text-primary">
                Home
              </a>
              <a href="#about" className="text-dark hover:text-primary">
                Tentang Kami
              </a>
              <a href="#post" className="text-dark hover:text-primary">
                Postingan
              </a>
              <a href="#contact" className="text-dark hover:text-primary">
                Kontak Kami
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
