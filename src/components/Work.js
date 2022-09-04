import calendarAppImg from "../assets/calendarApp.jpg";
import nutritionAppImg from "../assets/nutritionApp.jpg";
import feelEat from "../assets/feeleat.png";
import Resume from "../assets/CVDarBenShitrit.pdf"

const Work = () => {
  return (
    <div
      name="work"
      className="bg-[#874C62] w-full md:min-h-screen text-gray-300 py-20"
    >
      <div className="max-w-[810px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#c29797]">
            Work
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5">
          <div
            style={{ backgroundImage: `url(${feelEat})` }}
            className="shadow-lg shadow-[#f1d8cd] group container rounded-md justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 rounded-md duration-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider block pt-5">
                  FeelEat App
                </span>
                <div className="pt-8 text-center">
                  <a href="https://feeleat-app.herokuapp.com/" target="__blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/DarBS96/final-project"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${calendarAppImg})` }}
            className="shadow-lg shadow-[#f1d8cd] group container rounded-md justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 rounded-md duration-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider block pt-5">
                  Todo Calendar App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://rainbow-stroopwafel-a2cdda.netlify.app"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/DarBS96/Calender-App"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${nutritionAppImg})` }}
            className="shadow-lg shadow-[#f1d8cd] group container rounded-md justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 rounded-md duration-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider block pt-5">
                  Nutrition App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://nutrition-app-main.herokuapp.com/users/register"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/DarBS96/Nutrition-App"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/34407/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            }}
            className="shadow-lg shadow-[#f1d8cd] group container rounded-md justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 rounded-md duration-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider block pt-5">
                  Youtube App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://luxury-sunflower-cb7435.netlify.app"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/DarBS96/YouTube-App"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
