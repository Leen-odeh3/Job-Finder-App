import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {

 return (
    <div className="mainHeader">
      <div className="main">
     <Link to="/"><h1 >DevJobs</h1> </Link>
        <i class="bi bi-brightness-high-fill"></i>
      </div>
    
    </div>
  );
};

export default Header;
