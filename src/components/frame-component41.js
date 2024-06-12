import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component41.css";
import FrameComponent42 from './frame-component42'

const FrameComponent41 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="home-inner3">
      <div className="enhance-safety-with-inflatable-parent">
        <h1 className="enhance-safety-with">
          Enhance Safety with Inflatable Solutions
        </h1>
        <div className="backgroundborder-wrapper">

          
          <div className="backgroundborder9">
            <div className="our-inflatable-solutions-container">
              <span>
                <p className="our-inflatable-solutions">
                  Our inflatable solutions provide additional safety measures
                  for multi-rotor and fixed-wing drones. Designed for all drone
                  types, these inflatable systems offer custom options to suit
                  your needs.
                </p>
                <p className="furthermore-we-integrate">
                  Furthermore, we integrate robust inflation and deflation
                  mechanisms, ensuring swift deployment and a secure landing. 
                  By focusing on material science, precision engineering, and
                  reliable inflation systems, we're building the future of
                  adaptable and resilient drones
                </p>
               
              </span>
            </div>
            <div className="backgroundborder-inner">
              <div className="frame-wrapper16">
                <div className="image-75-parent">
                  <img
                    className="image-75-icon"
                    alt=""
                    src="/drone.svg"
                  />
                  
                </div>
              </div>
            </div>
          </div>



        </div>
        
        <FrameComponent42/>
        
      </div>
    </section>
  );
};

export default FrameComponent41;
