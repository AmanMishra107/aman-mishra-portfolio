import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:amanpavanmishra10@gmail.com?subject=Hello%20from%20your%20portfolio!&body=Hi%20Aman,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!%0A%0ABest%20regards,"
                data-cursor="disable"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:amanpavanmishra10@gmail.com?subject=Hello%20from%20your%20portfolio!&body=Hi%20Aman,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!%0A%0ABest%20regards,";
                }}
              >
                Email — amanpavanmishra10@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a
                href="tel:+919834248447"
                data-cursor="disable"
              >
                +91 9834248447
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/AmanMishra107"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/amanmishra107/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aman Mishra</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
