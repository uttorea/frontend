import React, { useState, useRef, useEffect } from "react";
import "./product3.css";

const Product4 = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const sliderRef = useRef(null);
  const lastTouchYRef = useRef(0);

  // Handle touch start to initialize touch position
  const handleTouchStart = (event) => {
    lastTouchYRef.current = event.touches[0].clientY;
  };

  // Handle touch move for Android devices
  const handleTouchMove = (event) => {
    const touchY = event.touches[0].clientY;
    const deltaY = touchY - lastTouchYRef.current;
    const newZoomLevel = zoomLevel - deltaY * 0.01;

    if (newZoomLevel >= 0 && newZoomLevel <= 1) {
      setZoomLevel(newZoomLevel);
    }

    lastTouchYRef.current = touchY;
  };

  // Zoom effect logic for mouse wheel
  useEffect(() => {
    const handleWheel = (event) => {
      const newZoomLevel = zoomLevel - event.deltaY * 0.01;
      if (newZoomLevel >= 0 && newZoomLevel <= 1) {
        setZoomLevel(newZoomLevel);
      }
    };
    document.addEventListener("wheel", handleWheel);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [zoomLevel]);

  const translateYValue = (0 + zoomLevel) * 100;

  return (
    <>
      <div className="container1">
        <h1 className="ballistic-emergency-recovery-container13">
          Ballistic Emergency Recovery Systems For Fixed Wing & Vtol UAVS
        </h1>
        <div
          className="ellipse"
          style={{
            backgroundColor: "#131420",
          }}>
          <div
            className="frame-wrapper53"
            style={{
              transform: `scale(${1 - zoomLevel})`,
              display: zoomLevel < 1 ? "block" : "none",
            }}>
            <div className="frame-parent363">
              <div className="pwm-based-manual-sensor-base-parent3">
                <div className="pwm-based-manual-container3">
                  <p className="pwm-based3">PWM based</p>
                  <p className="manual-sensor3">Manual / Sensor based</p>
                  <p className="automated-ejection-mod3">
                    Automated Ejection Mod
                  </p>
                </div>
                <div className="minimum-effective-height-20-wrapper3">
                  <div className="minimum-effective-height-container3">
                    <p className="minimum3">Minimum</p>
                    <p className="effective-height-3">
                      Effective Height - 20 m
                    </p>
                  </div>
                </div>
                <div className="descent-speed-5-ms-wrapper3">
                  <div className="descent-speed-container3">
                    <p className="descent3">Descent Speed -</p>
                    <p className="speed-53"> 4 to 6 m/s</p>
                  </div>
                </div>
              </div>
              <div className="pneumatic-micro-servo-sprin-parent3">
                <div className="pneumatic-micro-servo-container3">
                  <p className="pneumatic-micro-servo3">
                    Pneumatic/ Micro Servo + Spring for
                  </p>
                  <p className="ballistic-ejection3">Ballistic Ejection</p>
                </div>
                <div className="waterproof-and-dust-protection-wrapper3">
                  <div className="waterproof-and-dust-container3">
                    <p className="waterproof-and3">Waterproof and</p>
                    <p className="dust-protection3">Dust Protection</p>
                  </div>
                </div>
              </div>

              <div className="advanced-carbon-composite-stru-parent3">
                <div className="advanced-carbon-composite-container3">
                  <p className="advanced-carbon3">Advanced Carbon</p>
                  <p className="composite-structure3">
                    Composite Structuremated
                  </p>
                  <p className="ejectionmode">Ejection Mode</p>
                </div>
                <div className="operating-temperature-10-to-wrapper3">
                  <div className="operating-temperature-container3">
                    <p className="operating-temperature3">
                      Operating Temperature =
                    </p>
                    <p className="to-50-deg3">-10 to 50 deg C</p>
                  </div>
                </div>
                <div className="g-shock-on-mounting-points-wrapper3">
                  <div className="g-shock-on-container3">
                    <p className="g-shock-on3">3G Shock on</p>
                    <p className="mounting-points3">
                      Mounting Points above ground
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper63">
          <div className="arsentm-series-offers-built-in-parent3">
            <div className="arsentm-series-offers-container3">
              <b>DICERISTM</b>
              <span>
                {" "}
                Series offers built in intelligence and split-second decision
                making capable recovery system
              </span>
            </div>
            <div
              className="frame-wrapper7" 
              style={{
                transform: `translateY(${translateYValue}px)`,
                display: translateYValue > 70 ? "none" : "flex",
                transition: "transform 0.2s",
                position: "absolute",
                marginTop: "70px",
              }}>
              <div className="explore-arsentm-series-parent3">
                <div className="explore-arsentm-series-container3">
                  <span className="explore-arsentm-series-container13">
                    <span>{`Explore `}</span>
                    <span className="arsentm3">DicerisTM</span>
                    <span> Series</span>
                  </span>
                </div>
                <div className="vector-wrapper3">
                  <img className="vector-icon1" alt="" src="/vector1.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ellipse"
          style={{
            transform: `scale(${zoomLevel})`,
            backgroundColor: "#13131A",
            display: zoomLevel >= 0 ? "block" : "none",
          }}></div>
        <img
          src="/unnamed 7.png"
          alt="Overlay"
          className="overlay-imaged"
          style={{
            transform: `scale(${0.7 + 0.3 * zoomLevel})`,
          }}
        />
       
      </div>
    </>
  );
};

export default Product4;