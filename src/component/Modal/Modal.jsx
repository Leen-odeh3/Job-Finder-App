import React from "react";
import "./Modal.scss";
import { jobs } from "../../data/data";
import { useParams } from "react-router-dom";

const Modal = () => {
  const { id } = useParams();
  const newjob = jobs.find((e) => e.id === +id);

  if (!newjob) {
    return <div>Not Found</div>;
  }

  return (
    <div className="jobContain">
      <div className="details">
        {newjob.logo && (
          <img
            src={newjob.logo}
            style={{ backgroundColor: `${newjob.logoBackground}` }}
            alt={newjob.position}
          />
        )}
        <div>
          {newjob.company}
          <p>example.com</p>
        </div>
        <button>Company Site </button>
      </div>
      <div className="all">
        <div className="data">
          <div>
            <div className="info">
              {newjob.postedAt}
              <span>.</span>
              {newjob.contract}
            </div>
            <div className="title">
              <h2>{newjob.position}</h2>
            </div>
            <div className="place">
              <h5> {newjob.location}</h5>
            </div>
          </div>
          <button>Applay Now </button>
        </div>

        <div
          style={{
            marginTop: "20px",
            fontSize: "18px",
            color: "gray",
            marginBottom: "20px",
          }}
        >
          {" "}
          {newjob.description}
        </div>
        <h2>Requirements</h2>

        <p>
          Our work is not just about the code: we seek a tech lead who cares
          deeply about user experience and how their work impacts users. An
          ideal candidate has extensive experience as a full-stack software
          engineer, including experience with both Django and React/Redux, our
          stack. This role is perfect for a seasoned full-stack developer who is
          looking to grow both as an engineer and technical product owner. We
          want someone who takes the initiative to learn, enjoys thoughtful code
          review, and has a history collaborating with other software engineers
          to develop best patterns and practices.
        </p>
        <ul style={{ paddingLeft: "40px" }}>
          <li>{newjob.requirements.items[0]}</li>
          <li>{newjob.requirements.items[1]}</li>
          <li>{newjob.requirements.items[2]}</li>
        </ul>
        <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>
          {" "}
          What You Will Do
        </h2>
        <p>
          Beyond working closely with our team to build an exciting app, you’ll
          be leading Frontend development of our React/Next.js product. You’ll
          be coming up with UI/UX for the app and making architectural decisions
          for the frontend.
        </p>

        <li>
          {" "}
          Use your thorough understanding of core client-side technologies to
          architect complex user interactions for desktop and mobile browsers
          using React
        </li>
        <li>
          Cover your code with unit and integration tests written with Jest and
          Mocha
        </li>
        <li>
          Take part in decision-making around major architectural choices of the
          front-end team
        </li>
      </div>
      <div className="footer">
        <p>How to Apply</p>
        {newjob.position}
        <a hraf="#"> Apply Now</a>
      </div>
    </div>
  );
};

export default Modal;
