import "./App.css";
import Header from "./components/Header";
import Slide from "./components/Slide";
import MainService from "./components/MainService";
import AboutUs from "./components/AboutUs";
import Professional from "./components/Professional";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

import { useEffect, useState } from "react";

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="content-page">
        <Header />
        <Slide />
        <MainService />
      </div>
      <div className="background2">
        <div className="content-page">
          <AboutUs />
        </div>
      </div>
      <Professional />
      <div className="background3">
        <div className="content-page">
          <Contact />
        </div>
      </div>
      <div className="background4">
        <div className="content-page">
          <Footer />
        </div>
      </div>
      {showGoToTop && <GoToTop />}
    </div>
  );
}

export default App;
