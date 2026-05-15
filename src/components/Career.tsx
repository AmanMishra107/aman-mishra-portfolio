import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Pillai college of arts, commerce and science</h4>
                <h5>Panvel</h5>
              </div>
              <h3>2021-2024</h3>
            </div>
            <p>
              Bachelor's of Science in Computer Science. Cumulative CGPA : 8.75.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>St.Mary's Jr College</h4>
                <h5>Vashi</h5>
              </div>
              <h3>2019-2021</h3>
            </div>
            <p>
              Computer Science. Percentage : 83%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certified Ethical Hacking</h4>
                <h5>RST Forum</h5>
              </div>
              <h3>Jul - Sep 2024</h3>
            </div>
            <p>
              Completed comprehensive training in ethical hacking and penetration testing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Fundamentals</h4>
                <h5>IBM</h5>
              </div>
              <h3>Oct 2024</h3>
            </div>
            <p>
              Gained foundational knowledge in cybersecurity concepts and practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
