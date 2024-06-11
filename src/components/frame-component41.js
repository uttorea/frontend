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
        
        {/* <div className="frame-parent44">
          <div className="frame-parent45">
            <div className="backgroundborderoverlayblur-parent6">
              <img
                className="backgroundborderoverlayblur-icon7"
                loading="lazy"
                alt=""
                src="/backgroundborderoverlayblur.svg"
              />
              <div className="multirotor-drone-for-container2">
                <p className="multirotor-drone-for2">{`Multirotor Drone for `}</p>
                <p className="sea-based-recovery2">Sea based recovery system</p>
              </div>
            </div>
            <div className="backgroundborderoverlayblur-parent7">
              <img
                className="backgroundborderoverlayblur-icon8"
                loading="lazy"
                alt=""
                src="/backgroundborderoverlayblur-1.svg"
              />
              <div className="multirotor-drone-for-container3">
                <p className="multirotor-drone-for3">{`Multirotor Drone for `}</p>
                <p className="land-based-recovery2">
                  land based recovery system
                </p>
              </div>
            </div>
            <div className="backgroundborderoverlayblur-parent8">
              <img
                className="backgroundborderoverlayblur-icon9"
                loading="lazy"
                alt=""
                src="/backgroundborderoverlayblur-2.svg"
              />
              <div className="fixed-wing-drone-container2">
                <p className="fixed-wing-drone5">{`Fixed wing Drone for `}</p>
                <p className="sea-based-recovery3">Sea based recovery system</p>
              </div>
            </div>
            <div className="backgroundborderoverlayblur-parent9">
              <img
                className="backgroundborderoverlayblur-icon10"
                loading="lazy"
                alt=""
                src="/backgroundborderoverlayblur-3.svg"
              />
              <div className="fixed-wing-drone-container3">
                <p className="fixed-wing-drone6">{`Fixed wing Drone for `}</p>
                <p className="land-based-recovery3">
                  land based recovery system
                </p>
              </div>
            </div>
          </div>
          <div className="frame-wrapper17">
            <button
              className="explore-inflatable-airbags-sys-parent"
              onClick={onFrameButtonClick}
            >
              <div className="explore-inflatable-airbags">
                Explore Inflatable airbags system
              </div>
              <div className="vector-wrapper1">
                <img className="vector-icon4" alt="" src="/vector1.svg" />
              </div>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FrameComponent41;
