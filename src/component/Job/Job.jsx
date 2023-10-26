import React from "react";
import "./Job.scss";
import { jobs } from "../../data/data";
import { Link } from "react-router-dom";

const Job = ({search,setsearch,contract,setcontract}) => {


  const filteredJobs = jobs.filter((ele) => ele.contract === contract && ele.position.toLowerCase().includes(search) );

  return (
    <div className="items">
      {filteredJobs.map((ele) => (
        <div className="job-content">
          <div
            className="img"
            style={{ backgroundColor: `${ele.logoBackground}` }}
          >
            <img
              src={ele.logo}
              alt={`${ele.company}`}
              width="100%"
              height="100%"
              style={{padding:"15px 5px"}}
            />
          </div>
          <div className="info">
            {ele.postedAt}
            <span>.</span>
            {ele.contract}
          </div>
          <div className="title">
           <Link to={`/job/${ele.id}`}><h2 >{ele.position}</h2> </Link>
          </div>
          <div className="logo">
            <h4> {ele.company}</h4>
          </div>
          <div className="place">
            <h5> {ele.location}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Job;
