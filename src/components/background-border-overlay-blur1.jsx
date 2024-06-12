import { useMemo } from "react";
import "./background-border-overlay-blur1.css";

const BackgroundBorderOverlayBlur1 = ({
  image54,
  arsenTM,
  vector,
  propPadding,
  propGap,
  propHeight,
  propPadding1,
  propWidth,
  propWidth1,
  onFrameContainer1Click,
}) => {
  const backgroundBorderOverlayBlurStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
      height: propHeight,
    };
  }, [propPadding, propGap, propHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const image54IconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const exploreArsenTMSeriesContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="backgroundborderoverlayblur"
      style={backgroundBorderOverlayBlurStyle}
    >
      <div className="image-54-wrapper" style={frameDivStyle}>
        <img
          className="image-54-icon1"
          loading="lazy"
          alt=""
          src={image54}
          style={image54IconStyle}
        />
      </div>
      <div
        className="explore-arsentm-series-group"
        onClick={onFrameContainer1Click}
      >
        <div
          className="explore-arsentm-series-container2"
          style={exploreArsenTMSeriesContainerStyle}
        >
          <span className="explore-arsentm-series-container3">
            <span>{`Explore `}</span>
            <span className="arsentm1">{arsenTM}<sup>TM</sup></span>
            <span> Series</span>
          </span>
        </div>
        <div className="vector-frame">
          <img className="vector-icon3" loading="lazy" alt="" src={vector} />
        </div>
      </div>
    </div>
  );
};

export default BackgroundBorderOverlayBlur1;
