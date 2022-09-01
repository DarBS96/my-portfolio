import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  console.log(process.env);
  return (
    <div
      name="home"
      className="bg-[#0a192f] w-full h-screen md:pl-[80px] pt-40"
    >
      <div className="max-w-[1000px] max-auto px-8 flex flex-col justify-center h-full">
        {/* <p className="text-pink-600">Hi, my name is</p> */}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Or Turi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] py-3">
          Full Stack web developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {" "}
          I’m a full-stack web developer specializing in building web
          applications from front to back using modern web technologies such as
          React with Redux, Node.js, HTML, CSS, JavaScript and PostgreSQL.
        </p>
        <Link to="work" smooth={true} duration={500} className="w-max">
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </Link>
        <div className="md:hidden flex flex-col my-6">
          <ul className="flex flex-col gap-3">
            <li className="w-[160px] min-h-[60px] flex justify-between items-center  duration-300 bg-blue-900 rounded-lg">
              <a
                href="https://www.linkedin.com/in/or-turi-ab988276/"
                target="__blank"
                className="flex justify-between items-center w-full text-gray-300"
              >
                LinkedIn
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  duration-300 bg-[#333333] rounded-lg">
              <a
                href="https://github.com/ortori"
                target="__blank"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Github
                <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  duration-300 bg-yellow-700 rounded-lg">
              <a
                href="mailto:ortori@gmail.com"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Email
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  duration-300 bg-[#6fc2b0] rounded-lg">
              <a
                href="https://docs.google.com/document/d/1YZh5UVhxdkIDTNWUZdTSf_j07Jph3FcN/edit?usp=sharing&ouid=103723995000046318931&rtpof=true&sd=true"
                target="__blank"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Resume
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
