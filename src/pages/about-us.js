
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent9 from "../components/frame-component9";


import './about-us.css'
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div className="about-us1">
     <div className="aboutmaindiv">

           <Navbar/>
      <div className="overlay1" />
      <div className="gradient1" />
     
      <div className="about-us-inner">
        <div className="frame-group">
          <div className="uttorea-parent">
            <h1 className="uttorea">Uttorea</h1>
            <h2 className="rescue-safety">{`Rescue & Safety systems`}</h2>
          </div>
          <div className="at-uttorea-our-mission-is-sim-wrapper">
            <b className="at-uttorea-our">
              At Uttorea, our mission is simple yet profound - to bring safety
              and protection to the Unmanned Aerial Systems (UAS), Remotely
              Piloted Aerial Systems (RPAS), and Urban Air Mobility (UAM)
              operations. Our name, Uttorea, is derived from the Sanskrit word
              'Uttaranah,' meaning rescuer, and the Greek goddess 'Soteria,'
              symbolizing safety and preservation.
            </b>
          </div>
        </div>
      </div>
      <div className="about-us-inner1">
        <div className="our-story-parent">
          <h1 className="our-story">Our Story</h1>
          <div className="backgroundborder">
            <div className="imbibing-the-qualities-container">
              <span>
                <p className="imbibing-the-qualities">{` Imbibing the qualities of our name, Uttoria’s goal is about bringing safety & protection to Unmanned Aerial Systems (UAS), Remotely Piloted Aerial Systems (RPAS)  & Urban Air Mobility (UAM) operations. `}</p>
                <p className="blank-line">&nbsp;</p>
                <p className="our-mission-is">{`Our mission is to safeguard the life and property of the UAS & UAM eco-system and all its shareholders. Be it The operators, end-users, government regulatory bodies and the civil airspace they fly over across the globe through continuous R&D and investment into our product and service portfolio`}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent9/>
      <FrameComponent8/>
      <FrameComponent1 />
    </div>
      <FrameComponent />
    </div>

  );
};

export default AboutUs;
