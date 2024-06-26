// import { useCallback } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import FrameComponent41 from "../components/frame-component41";
import FrameComponent51 from "../components/frame-component51";
import FrameComponent31 from "../components/frame-component31";

import Navbar from "./Navbar";
import gradient from "../assert/Gradient.png"
import { useNavigate } from "react-router-dom";
import "./home.css";
import backGround from "../assert/Uttorea.mp4";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="home2">
     

        <Navbar />
      <div className="homepagemainimage">

        <section className="home-inner">
          <video autoPlay muted loop playsInline className="background-video">
            <source src={backGround} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gradient-overlayhome">
            {/* <img src={gradient} alt="home "/> */}
          </div>
        </section>

        <section className="home-child">
          <div className="empowering-unmanned-aerial-op-parent">
            <h1 className="empowering-unmanned-aerial-container">
              <p className="empowering">{`“Empowering `}</p>
              <p className="unmanned-aerial-operations">{`unmanned aerial Movement / Mobility `}</p>
              <p className="to-fly-everywhere">to fly everywhere safely.”</p>
            </h1>
            <div className="backgroundborder2">
              <div className="safety-is-paramount">
                "Safety is paramount in the aerospace industry, and our mission
                is to safeguard the life and property of the UAS and UAM
                ecosystem. Whether it's operators, end-users, or government
                regulatory bodies, we prioritize safety to ensure seamless
                operations globally."
              </div>
            </div>
          </div>
        </section>

        <FrameComponent51 id='discoversection'/>
        <FrameComponent41 />
        <FrameComponent6 />
        <FrameComponent31 />
        <FrameComponent2 />
        <FrameComponent1 />
      </div>
      <FrameComponent />
    </div>
  );
};

export default Home;
