import calendarAppImg from "../assets/calendarApp.jpg";
import nutritionAppImg from "../assets/nutritionApp.jpg";
import weatherAppImg from "../assets/weatherApp.jpg";
import snapshotAppImg from "../assets/snapshaot.jpg";
import exerciseTrackingImage from "../assets/exercise-tracking.jpg";
import todoImg from "../assets/Todo-App.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className="bg-[#0a192f] w-full md:min-h-screen text-gray-300 py-20"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#c29797]">
            Work
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${exerciseTrackingImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 rounded-md duration-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider block pt-5">
                  Exercise tracking App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://exercises-tracking-app.herokuapp.com/login"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/ortori/final-project-DI"
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
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 rounded-md duration-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider block pt-5">
                  Todo Calendar App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://endearing-bubblegum-cc8347.netlify.app/"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/ortori/DI-Hackathon-1"
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
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 rounded-md duration-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider block pt-5">
                  Nutrition App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://nutrition-app-di.herokuapp.com/"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/ortori/nutritionApp"
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
            style={{ backgroundImage: `url(${weatherAppImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 rounded-md duration-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider block pt-5">
                  Weather App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://lighthearted-praline-3327d1.netlify.app/"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/ortori/diexs/tree/main/week8/MiniProjectWeatherApp"
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
            style={{ backgroundImage: `url(${snapshotAppImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 rounded-md duration-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider block pt-5">
                  Photo Gallery App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://venerable-bombolone-6b66e0.netlify.app/"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/ortori/Snapshot-photo-gallery-app"
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
            style={{ backgroundImage: `url(${todoImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 rounded-md duration-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider block pt-5">
                  Todo List App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://luxury-meringue-bbfac9.netlify.app"
                    target="__blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/ortori/diexs/tree/main/week15/day5/mini-project-todo-list"
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
