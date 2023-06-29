import React, { useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Portofolio from "./components/Portofolio";
import Background from "./assets/bg-1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      offset: 200,
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <div>
      <img
        src={Background}
        alt="background"
        className="absolute top-20 left-0 w-full opacity-20 -z-10"
      />
      <div className="w-4/5 mx-auto">
        <Header />
        <Banner />
      </div>
      <Portofolio />
      <Footer />
    </div>
  );
}

export default App;
