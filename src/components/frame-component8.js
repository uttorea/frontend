import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component8.css";
import FrameComponent42 from "./frame-component42";

const FrameComponent8 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="home-inner8">
      <div className="our-solutions-parent">
        <h1 className="our-solution">Our Inflatable Recovery Solutions</h1>

        <div className="our-solutions-container">
          <div className="our-p-solutions">
            Uttorea offers a range of safety and recovery systems designed to
            meet the diverse needs of the aerospace industry. From custom
            solutions for speciality or customized UAS to off-the-shelf systems
            compatible with various drone platforms, Uttorea provides reliable
            and cost-effective solutions for drone safety.
          </div>
        </div>
        <FrameComponent42 />
      </div>
    </section>
  );
};

export default FrameComponent8;
