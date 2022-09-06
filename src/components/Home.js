import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ProfileImg from "../assets/profile-img2.jpg"
import ".././index.css"

const Home = () => {
  console.log(process.env);
  return (
    <div name="home" className="bg-[#874C62] w-full flex md:pl-[80px] pt-40">
      <div className="max-w-[1000px] max-auto px-8 flex flex-col justify-center">
        {/* <h1 className="text-4xl sm:text-7xl text-[#ccd6f6] home-name-title ">
          Dar Ben Shitrit
        </h1> */}
        <h1 className="text-4xl inline border-b-4 border-[#c29797] sm:text-7xl text-[#ccd6f6] py-3 home-description-title">
          Full Stack web developer
        </h1>
        <p className=" sm:text-2xl py-4 max-w-[700px] about-me">
          Hey there everyone, I am happy to welcome you here to my website! My
          name is Dar, and I am passionate about web development and bringing
          new and innovative projects to the world.
          <br /> About a year ago, I was exposed to web development and fell in
          love with this unlimited field, especially its ability to express and
          combine creativity and logic.
          <br /> I graduated from{" "}
          <a
            class="developer-institute"
            href="https://developers.institute/en/"
          >
            "Developers.Institute"
          </a>{" "}
          and I have experience building reliable and elegant JavaScript
          websites and applications. I also have obtained my bachelor's degree
          in Social Work studies. I am devoted to deepening my skills as a web
          developer, which has brought me big excitement, constantly learning as I love the <i>challenge</i> of
          creating new things.
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
                href="https://www.linkedin.com/in/dar-ben-shitrit-119894203"
                target="__blank"
                className="flex justify-between items-center w-full text-gray-300"
              >
                LinkedIn
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  duration-300 bg-[#333333] rounded-lg">
              <a
                href="https://github.com/DarBS96?tab=repositories"
                target="__blank"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Github
                <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  duration-300 bg-yellow-700 rounded-lg">
              <a
                href="mailto:Bsdar00@gmail.com"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Email
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  duration-300 bg-[#6fc2b0] rounded-lg">
              <a
                href="CVDarBenShitrit"
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
      {/* <img src={ProfileImg} alt="profile-img" /> */}
    </div>
  );
};

export default Home;
