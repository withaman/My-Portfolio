import { Route, Routes } from "react-router-dom";
import "./App.css";
import bgImage from "./assets/bgImage.jpg";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* Watermark */}
      <div
        className="
          fixed
          bottom-0
          left-0
          z-0
          pointer-events-none
          select-none
          opacity-50
        "
      >
        <h1
          className="
            text-[90px]
            sm:text-[50px]
            md:text-[150px]
            text-white
            whitespace-nowrap
          "
          style={{
            fontFamily: "'Qwitcher Grypen', cursive",
            transform: "translate(-130px, -100px) rotate(-90deg)",
          }}
        >
          with.aman
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <ScrollToTop />

    </div>
  );
}

export default App;