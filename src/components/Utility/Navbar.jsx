import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu open/close
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <nav className="p-3 bg-white flex justify-between md:px-8 items-center fixed top-0 w-full z-50">
          <div className="w-1/3 flex justify-start items-center lg:justify-end">
            <img
              className="block md:hidden cursor-pointer"
              src="/assets/hamburger.svg"
              alt="hamburger"
              onClick={toggleMenu}
            />
            <ul className={`absolute md::static ${isMenuOpen ? 'block' : 'hidden'} top-0  w-[25vw]  md:flex  gap-4 text-lg font-semibold font-mono bg-white p-4 shadow-lg md:shadow-none rounded-lg`} ref={menuRef}>
              <li><Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/men" onClick={() => setIsMenuOpen(false)}>Men</Link></li>
              <li><Link to="/women" onClick={() => setIsMenuOpen(false)}>Women</Link></li>
              <li><Link to="/kids" onClick={() => setIsMenuOpen(false)}>Kids</Link></li>
            </ul>
          </div>
          <div className="w-1/3 flex justify-center">
            <Link to="/home">
              <p className="text-3xl font-bold font-serif">
                <i>Nex<span className="text-orange-500">Cart</span></i>
              </p>
            </Link>
          </div>
          <div className="w-1/3 flex justify-end lg:justify-start">
            <ul className="flex gap-2 md:gap-4  text-lg font-semibold font-mono md:px-20">
              <Link to="/cart"><img className="h-6 md:h-8" src="/assets/cart.png" alt="Cart" /></Link>
              <Link to="/account"><img className="h-6 md:h-8" src="/assets/user.png" alt="User" /></Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
