import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./frame-component2.css";
import ButtonWithPopup from "./ButtonWithPopup";

const FrameComponent2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState("");
  const [email, setEmail] = useState("");

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(selectedSystem, email);
      alert("Email sent successfully!");
      handleClosePopup();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const sendEmail = async (system, email) => {
    try {
      await emailjs.send(
        "service_utx929k",
        "template_5w3q5pt",
        { system, email },
        "N2fOyjGttFJAEtRu_"
      );
    } catch (error) {
      throw new Error("Failed to send email");
    }
  };

  const togglePopup = (systemName) => {
    setSelectedSystem(systemName);
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="rectangle-parent12">
      <h1 className="download-brochure1">{`Download Brochure`}</h1>
      <div className="frame-parent48">
        <div
          className="backgroundborderoverlayblur-parent11 clickable"
          onClick={() => togglePopup("Small & Medium UAV recovery system")}
        >
          <img
            className="backgroundborderoverlayblur-icon11"
            loading="lazy"
            alt=""
            src="/backgroundborderoverlayblur-4.svg"
          />
          <div className="small-medium1">Small & Medium UAV recovery system</div>
        </div>
        <div
          className="backgroundborderoverlayblur-parent12 clickable"
          onClick={() => togglePopup("VTOL / UAM recovery system")}
        >
          <img
            className="backgroundborderoverlayblur-icon12"
            loading="lazy"
            alt=""
            src="/backgroundborderoverlayblur-5.svg"
          />
          <div className="vtol-uam1">VTOL / UAM recovery system</div>
        </div>
        <div
          className="backgroundborderoverlayblur-parent13 clickable"
          onClick={() => togglePopup("Inflatables for UAV recovery system")}
        >
          <img
            className="backgroundborderoverlayblur-icon13"
            loading="lazy"
            alt=""
            src="/backgroundborderoverlayblur-6.svg"
          />
          <div className="inflatables-for-uav1">
            Inflatables for UAV recovery system
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <ButtonWithPopup
          togglePopup={() => togglePopup("")}
          isPopupVisible={isPopupOpen}
          selectedSystem={selectedSystem}
        />
      )}
    </div>
  );
};

export default FrameComponent2;
