import React, { useState } from 'react';
import axios from 'axios';
import FrameComponent from "../components/frame-component";
import Navbar from "./Navbar";
import "./contact-us.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    reason: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.reason || !formData.message) {
      alert('All fields are required!');
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate phone number format
    if (!validatePhoneNumber(formData.phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      // const response = await axios.post('http://localhost:8000/api/contact/', formData);
      const response = await axios.post('https://uttoria.pythonanywhere.com/api/contact/', formData);
      console.log('Form submitted successfully:', response.data);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className='contectusmain'>
      <section className="frame-wrapper121">
        <Navbar/>
        <div className="frame-parent331">
          <div className='mapimage'>
            <img className="image-25-icon" alt="" src="/Section 2.png" />
            <div className="overlay-parent"/>



            <div className='contectusdivmain'>
              <div className='contectusall'>
              <div className="contectusleft">
                <div className='addressmain'>
                  <div className='addressall'>
                    <img className="spanelementor-icon1" loading="lazy" alt="" src="/Symbol.png" />
                  </div>
                  <div className='addresssection'>
                    <h1>Address</h1>
                    <p>DJAC, SIIC building, IIT Kanpur 208016</p>
                  </div>
                </div>
                <div className='forinquarymain'>
                  <div className='forinquaryimage'>
                    <img className="spanelementor-2" loading="lazy" alt="" src="/Symbolm.png" />
                  </div>
                  <div className='forinquari-heading'>
                    <h1>For Inquiries</h1>
                    <p>sales@uttorea.com</p>
                  </div>
                </div>
                <div className='for-sales-inquari-main'>
                  <div className='forsalesimg'>
                    <img className="spanelementor-3" loading="lazy" alt="" src="/Vector.png" />
                  </div>
                  <div className='forsalehead'>
                    <h1>For Sales Inquiry</h1>
                    <p>+91 721 928 6003</p>
                  </div>
                </div>
              </div>
              <div className="frame-parent341">
                <div className="frame-parent351">
                  <div className="name-group1">
                    <div className="name21">Name</div>
                    <div className="rectangle-parent61">
                      <input
                        className="your-full-name21"
                        placeholder="Your full name"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="contact-group1">
                    <div className="contact21">{`Contact `}</div>
                    <div className="rectangle-parent71">
                      <input
                        className="phno-name271"
                        placeholder="Phone number"
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-parent361">
                  <div className="frame-parent371">
                    <div className="email-group11">
                      <div className="email21">Email</div>
                      <div className="frame-parent381">
                        <input
                          className="emailinput1"
                          placeholder="Your email address"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="subject-group1">
                      <div className="subject21">{`Subject `}</div>
                      <div className="rectangle-parent91">
                        <input
                          className="reason-for-the21"
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
                <div className="message21">Message</div>
                <textarea
                  className="frame-child27"
                  placeholder="Write your message.."
                  rows={10}
                  cols={46}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button className="send-message-frame1" onClick={handleSubmit}>
                  <div className="send-message21">Send message</div>
                </button>
              </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <FrameComponent/>
    </div>
  );
};

export default ContactUs;
