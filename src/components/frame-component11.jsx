import "./frame-component11.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-wrapper18">
      <div className="frame-parent49">
        <div className="need-help-lets-discuss-you-container">
          <h1 className="need-help-lets-container2">
            <p className="need-help2">Need Help?</p>
            <p className="lets2">
              <b>{`Let's `}</b>
            </p>
            <p className="discuss2">
              <b>{`Discuss `}</b>
            </p>
            <p className="your-vision2">
              <b>Your Vision</b>
            </p>
          </h1>
          <div className="whether-youre-seeking2">
            Whether you're seeking innovative solutions, collaboration
            opportunities, or simply have a query, our team is here to assist
            you every step of the way.
          </div>
        </div>
        <div className="frame-parent50">
          <div className="frame-parent51">
            <div className="name-container">
              <div className="name4">Name</div>
              <div className="rectangle-parent13">
                <div className="frame-child36" />
                <div className="your-full-name3">Your full name</div>
              </div>
            </div>
            <div className="contact-container">
              <div className="contact3">{`Contact `}</div>
              <div className="rectangle-parent14">
                <div className="frame-child37" />
                <div className="phno-name3">Phno. name</div>
              </div>
            </div>
          </div>
          <div className="frame-parent52">
            <div className="frame-parent53">
              <div className="email-container">
                <div className="email3">Email</div>
                <div className="frame-parent54">
                  <div className="rectangle-parent15">
                    <div className="frame-child38" />
                    <div className="your-email-address3">
                      Your email address
                    </div>
                  </div>
                  <div className="message3">Message</div>
                </div>
              </div>
              <div className="subject-container">
                <div className="subject3">{`Subject `}</div>
                <div className="rectangle-parent16">
                  <div className="frame-child39" />
                  <div className="reason-for-the3">Reason for the message</div>
                </div>
              </div>
            </div>
            <textarea
              className="frame-child40"
              placeholder="Write your message.."
              rows={10}
              cols={46}
            />
          </div>
          <button className="frame-button">
            <div className="send-message3">Send message</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
