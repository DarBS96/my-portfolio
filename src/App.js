import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [nav, setNav] = useState(false);
  const navActive = (nav) => {
    setNav(nav);
  };
  return (
    <div>
      <Navbar nav={navActive} />
      <div className={nav ? "pointer-events-none" : ""}>
        <Home />
        {/* <About /> */}
        {/* <Skills /> */}
        <Work />
      </div>
      {/* <Contact /> */}
    </div>
  );
}

export default App;
