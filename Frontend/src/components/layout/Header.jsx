import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaChevronDown,
  FaMagnifyingGlass,
  FaShoppingCart,
  FaUserCircle,
  RxHamburgerMenu,
} from "../ui/Icons";
import Logo from "/Logo.png";
import { Link } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import useToggleStore from "../store/useToggleStore";
import SidebarNavMenu from "./SidebarNavMenu";
import SidebarCartMenu from "../cart/SidebarCartMenu";

const Header = () => {
  const { setSearchQuery } = useProductStore();
  const {
    toggleCart,
    toggleNav,
    isDropdownOpen,
    toggleDropdown,
    toggleUser,
    isUserOpen,
  } = useToggleStore();

  return (
    <header className="bg-white border-b">
      <Motion.div className="flex items-center justify-between p-4 container mx-auto">
        {/* left col */}
        <div className="flex items-center">
          {/* Sidebar */}
          <div className="sm:hidden">
            <RxHamburgerMenu
              size={30}
              className="text-black cursor-pointer"
              onClick={toggleNav}
            />
            <SidebarNavMenu />
          </div>

          {/* Logo */}
          <Link to={"/"}>
            <img src={Logo} className="h-auto w-[120px]" alt="LogoShoes" />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden sm:flex gap-6 text-lg font-medium">
            <div className="relative">
              <button
                className="flex items-center gap-1"
                onClick={toggleDropdown}
              >
                Shop{" "}
                <FaChevronDown
                  size={15}
                  className={`${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-md p-5 rounded-md z-10">
                  <nav className="flex flex-col">
                    <Link className="py-1 px-3 hover:bg-gray-200 rounded">
                      Nike
                    </Link>
                    <Link className="py-1 px-3 hover:bg-gray-200 rounded">
                      Adidas
                    </Link>
                    <Link className="py-1 px-3 hover:bg-gray-200 rounded">
                      Fila
                    </Link>
                    <Link className="py-1 px-3 hover:bg-gray-200 rounded">
                      Puma
                    </Link>
                    <Link className="py-1 px-3 hover:bg-gray-200 rounded">
                      Under Armour
                    </Link>
                  </nav>
                </div>
              )}
            </div>
            <Link to={"/onsale"} className="hover:text-gray-600">
              On Sale
            </Link>
            <Link to={"/newarrivals"} className="hover:text-gray-600">
              New Arrivals
            </Link>
            <Link className="hover:text-gray-600">Brands</Link>
          </nav>
        </div>

        {/* right col */}
        {/* Cart and User Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden lg:block">
            {/* Search Input */}
            <input
              type="text"
              className="2xl:w-[500px] w-full rounded-full bg-gray-200 pl-12 py-3 pr-4 focus:outline-none"
              placeholder="Search for products..."
              onChange={(e) => setSearchQuery(e.target.value)} //update searchQuery state
            />
            {/* Magnifying Glass Icon */}
            <FaMagnifyingGlass
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600"
            />
          </div>
          {/* MenuCart */}
          <FaShoppingCart
            size={26}
            className="cursor-pointer hover:text-gray-600"
            onClick={toggleCart}
          />
          <SidebarCartMenu />
          {/* Users */}
          <div className="relative">
            <FaUserCircle
              size={26}
              className="cursor-pointer hover:text-gray-600"
              onClick={toggleUser}
            />
            {/* show when user is true */}
            {isUserOpen && (
              <div className="absolute top-10 -left-10 bg-red-500/50 py-2 px-4 rounded-2xl">
                <Link to={'/login'}>
                  <button className="text-white font-semibold cursor-pointer">Login</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Motion.div>
    </header>
  );
};

export default Header;
