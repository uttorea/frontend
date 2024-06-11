import { useCallback } from "react";
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
import backGround from "../assert/Uttorea H.mp4";

const Home = () => {
  return (
    <div className="home2">
      <div className="homepagemainimage">
        <Navbar />

        <section className="home-inner">
          <video autoPlay muted loop playsInline className="background-video">
            <source src={backGround} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gradient-overlayhome">
            <img src={gradient} alt="home "/>
          </div>
        </section>

        <section className="home-child">
          <div className="empowering-unmanned-aerial-op-parent">
            <h1 className="empowering-unmanned-aerial-container">
              <p className="empowering">{`“Empowering `}</p>
              <p className="unmanned-aerial-operations">{`unmanned aerial Movement/ Movability `}</p>
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
        <FrameComponent51/>
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
