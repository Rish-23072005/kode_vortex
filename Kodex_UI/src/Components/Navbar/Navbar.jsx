import { RiArrowDownSLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import "./NavBar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex w-full justify-between space-x-3 pt-4 items-center font-sans ">
      <div className="flex items-center w-[60%]">
        <Link to="/">
          {" "}
          <img
            src="../../../public/Logo2_2.png"
            alt="logo"
            className="w-44 pt-2 img1"
          />
        </Link>

        <Link to="/">
          {" "}
          <img
            src="../../../public/logo3.png"
            alt="logo"
            className="w-10 img2  mr-2"
          />
        </Link>
        <div id="searchbar" className="">
          <div className="xl:flex sm:hidden xl:flex-row relative   w-full">
            <input
              className="h-9 w-80 rounded-lg text-sm bg-zinc-800 text-white focus:outline-0 pl-8"
              placeholder="What do you want to learn today?"
              type="search"
              name="search"
              id="search"
            />
            <FiSearch className="absolute top-3  left-2 text-white text-bold" />
          </div>

          <div className="sm:ml-4 md:ml-0  xl:hidden relative sm:flex sm:flex-row sm:w-72 md:w-full">
            <input
              className="h-9 sm:w-80 md:w-[265px] rounded-lg bg-zinc-800 text-white focus:outline-0 px-8"
              placeholder="Search"
              type="text"
              name="search"
              id="search"
            />
            <FiSearch className="absolute top-3  left-2 text-white text-bold" />
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-end space-x-3 w-[50%] "
        id="services"
      >
        <div className=" flex font-sans space-x-4 text-sm text-white">
          <Link to="/training">Trainings</Link>
          <Link to="/service">Services</Link>
          <h1>Log In</h1>
        </div>
        <button className="px-3 py-1 rounded-full text-sm text-white font-semibold signupcolor">
          Sign Up
        </button>
      </div>
      <div className="flex space-x-4">
        <div className="text-white " id="browse">
          <h1 className="text-white flex items-center gap-x-2 ">
            Browse <RiArrowDownSLine className="text-xl" />{" "}
          </h1>
        </div>

        <div id="ham" className="w-[50%]">
          <RxHamburgerMenu className="text-white text-2xl font-bold " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
