import React, { useEffect, useState } from "react";
import "./frame-component5.css";

const FrameComponent5 = () => {
  const [scrollBallPosition, setScrollBallPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollBallPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="frame-section">
      <header className="b4fa8b1f819ec20581eca-homepage-parent">
        <div className="b4fa8b1f819ec20581eca-homepage">
          <div className="image-72-parent">
            <img
              className="image-72-icon"
              alt=""
              src="/image-72@2x.png"
              style={{ width: "1800px" }}
            />
            <div className="rectangle-parent3">
              <div className="frame-child15" />
              <div className="overlay-group">
                <div className="overlay3" />
                <h1 className="recovery-systems">Recovery Systems</h1>
                <h3 className="plug-and-play">Plug and Play solution</h3>
                <div
                  className="divelementor-widget-wrap1"
                  style={{ width: "1250px" }}
                >
                  <div className="we-design-and">
                    We design and deliver plug and play recovery systems and
                    parachute based emergency recovery systems for both fixed
                    and rotary wing UAS between 5 to 300Kg UAV systems.
                  </div>
                  <div className="we-offer-airframe">
                    We offer airframe specific customised products from 50 kgs
                    to 250 kgs All Up Weight.
                  </div>
                </div>
                <h1 className="what-we-do">What we do</h1>
                <div className="gradient2" />
              </div>
            </div>
          </div>
          <div
            className="scroll-ball"
            style={{ top: `${scrollBallPosition}%` }}
          ></div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent5;
