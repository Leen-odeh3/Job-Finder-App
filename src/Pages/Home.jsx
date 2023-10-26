import React, { useState } from "react";
import {jobs} from '../data/data'
import Job from '../component/Job/Job'
import Search from '../component/Search/Search'
// import Load from "../component/Load";

const Home = () => {
  const [search, setsearch] = useState();

  const[contract,setcontract]=useState("");

  const handleContractChange = (value) => {
    setcontract(value);
  };

  const job = contract === "" ? jobs : jobs.filter(item => item.contract === contract);

  return (
    <div >
     <Search search={search} setsearch={setsearch} handle={handleContractChange}/>
      <Job  search={search} setsearch={setsearch} contract={contract} setcontract={setcontract} jobs={job}/>
      {/* <Load/> */}
    </div>
  )
}

export default Home
