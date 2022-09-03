import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  useEffect(() => {
    props.nav(nav);
  }, [nav]);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {/* <img src={logo} alt="logo" style={{ width: "50px" }} /> */}
        <p className="logo">Dar Ben Shitrit</p>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        {/* <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li> */}
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10 text-4xl">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={`
          ${
            nav
              ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
              : "hidden"
          }`}
      >
        <li className="py-6 text-4xl">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            Home
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            About
          </Link>
        </li> */}
        <li className="py-6 text-4xl">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-60}
            onClick={() => setNav(false)}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="work"
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            Work
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            Contact
          </Link>
        </li> */}
      </ul>
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul className="flex flex-col gap-1">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900 rounded-lg">
            <a
              href="https://www.linkedin.com/in/dar-ben-shitrit-119894203"
              target="__blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-lg">
            <a
              href="https://github.com/DarBS96?tab=repositories"
              target="__blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-700 rounded-lg">
            <a
              href="mailto:Bsdar00@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] rounded-lg">
            <a
              href=""
              target="blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
