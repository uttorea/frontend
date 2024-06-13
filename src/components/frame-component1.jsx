import React, { useState } from "react";
import axios from "axios";
import "./frame-component1.css";

const FrameComponent1 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.fullName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.reason ||
      !formData.message
    ) {
      alert("All fields are required!");
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone number format
    if (!validatePhoneNumber(formData.phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      // const response = await axios.post('http://localhost:8000/api/contact/', formData);
      const response = await axios.post(
        "https://uttoria.pythonanywhere.com/api/contact/",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <section className="frame-wrapper12">
      <div className="frame-parent33">
        <div className="need-help-lets-discuss-you-group">
          <h1 className="need-help-lets-container1">
            <p className="need-help1">Need Help?</p>
            <p className="lets1">{`Let's `}</p>
            <p className="discuss1">{`Discuss `}</p>
            <p className="your-vision1">Your Vision</p>
          </h1>
          <div className="whether-youre-seeking1">
            Whether you're seeking innovative solutions, collaboration
            opportunities, or simply have a query, our team is here to assist
            you every step of the way.
          </div>
        </div>
        <div className="frame-parent34">
          <form className="frame-parent35" onSubmit={handleSubmit}>
            <div className="allnames">
              <div className="namecontect">
                <div className="name-group">
                  <div className="name2">Name</div>
                  <div className="rectangle-parent6">
                    <div className="frame-child23" />
                    <input
                      className="your-full-name2"
                      placeholder="Your full name"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="contact-group">
                  <div className="contact2">{`Contact `}</div>
                  <div className="rectangle-parent7">
                    <div className="frame-child24" />
                    <input
                      className="phno-name27"
                      placeholder="Phone number"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="frame-parent36">
                <div className="frame-parent37">
                  <div className="email-group">
                    <div className="email2">Email</div>
                    <div className="frame-parent38">
                      <div className="rectangle-parent8">
                        <div className="frame-child25" />
                        <input
                          type="email"
                          className="your-email-address22"
                          placeholder="Your email address"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  
                  <div className="subject-group">
                    <div className="subject2">{`Subject `}</div>
                    <div className="rectangle-parent9">
                      <div className="frame-child26" />
                      <input
                        className="reason-for-the2"
                        placeholder="Reason for the message"
                        type="text"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="message2">Message</div>
              <textarea
                className="frame-child271"
                placeholder="Write your message.."
                rows={5}
                cols={100}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
        
            <button className="send-message-frame" type="submit">
              <div className="send-message2">Send message</div>
            </button>
        </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
