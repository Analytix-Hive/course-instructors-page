import { useState } from 'react';
import logo from '../assets/Analytix Hive Logo(transparent).png'
import { IoMdMenu } from "react-icons/io";
const Navbar = ({scrollToSection, waitlistRef, classesRef, contactRef}) => {
  const [boxIsOpen, setBoxIsOpen] = useState(false)
  return (
    <header className="flex justify-between items-center w-full">
      <i className=" mx-2">
        <img src={logo} alt="logo" className="w-[100px]" />
      </i>

      {/* Mobile Nav */}
      <nav className="block md:hidden list-none w-44 text-[#061c2d] font-semibold cursor-pointer my-5">
        <li
          onClick={() => scrollToSection(waitlistRef)}
          className="bg-amber-300 p-2 rounded-md text-white"
        >
          Be an Instructor
        </li>

        {boxIsOpen && (
          <div className="">
            <li
              onClick={() => scrollToSection(classesRef)}
              className="shadow-lg p-2 rounded-md"
            >
              Shape the Future
            </li>
            <li
              onClick={() => scrollToSection(contactRef)}
              className="shadow-lg p-2 rounded-md"
            >
              Answer the Call
            </li>
          </div>
        )}
      </nav>

      <nav className="hidden md:flex justify-around items-center list-none w-[60%] lg:w-[45%] text-[#061c2d] font-semibold cursor-pointer my-5">
        <li
          onClick={() => scrollToSection(waitlistRef)}
          className="hover:bg-amber-300 hover:p-2 hover:rounded-md hover:text-white"
        >
          Be an Instructor
        </li>
        <li
          onClick={() => scrollToSection(classesRef)}
          className="hover:shadow-lg hover:p-2 rounded-md"
        >
          Shape the Future
        </li>
        <li
          onClick={() => scrollToSection(contactRef)}
          className="hover:shadow-lg hover:p-2 rounded-md"
        >
          Answer the Call
        </li>
      </nav>
      <span
        className="mx-3 block md:hidden"
        onClick={() => setBoxIsOpen(!boxIsOpen)}
      >
        <i>
          <IoMdMenu className="text-2xl" />
        </i>
      </span>
    </header>
  );
}

export default Navbar