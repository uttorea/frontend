import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundBorderOverlayBlur1 from "./background-border-overlay-blur1";
// import image from '../../public/vector1.svg'
import "./frame-component51.css";

const FrameComponent51 = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  return (
    <section className="home-inner2">
      <div className="discover-our-recovery-systems-parent">
        <h1 className="discover-our-recovery">Discover Our Recovery Systems</h1>
        <div className="frame-wrapper15">
          <div className="frame-parent43">
            <div className="our-recovery-system-is-capable-wrapper">
              <div className="our-recovery-system">
                Our recovery system is capable to recover different classes of
                Drone systems. Multirotor, fixed wing, VTOL drones and RUAVs
              </div>
            </div>

            <div className="recoversectionimages ">
              <div className="assentnmimagesection">
                <div className="assentimage12 ">
                  <img className="asentimageicon" alt="" src="/image-541@2x.png"/>
                  <hr className="assentnmhr" />
                  <div className="assentmname">Explore Arsen<sup>TM</sup> Series <spam><img alt="" className="svgicondecent" src="./vector1.svg"/></spam></div>
                </div>
              </div>


              <div className="dessentnmimagesection">
                <div className="assentimage123">
                  <img className="decntmimageicon" alt="" src="/unnamed 7.png"/>
                  <hr style={{color:'cyan',height:'3px', border:'none',backgroundColor:'cyan', width:'100%'}}/>
                  <div className="deassentmname">Explore Diceris<sup>TM</sup> Series <spam><img alt="" className="svgicondecent" src="./vector1.svg"/></spam></div>
                </div>
              
              </div>

            </div>

            <div className="explore-our-range-of-recovery-wrapper">
              <div className="explore-our-range">
                Explore our range of recovery systems, each designed to meet
                specific needs and requirements
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent51;
