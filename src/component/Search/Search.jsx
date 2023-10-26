import React from "react";
import "./Search.scss";

const Search = ({search,setsearch,handle}) => {

  const contract=["Part Time","Full Time","Freelance"];
  return (
    <div>
      <div className="search-header">
        <input
          type="text"
          placeholder="Filter by Position  ..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />

        <i class="bi bi-search"></i>
      </div>
      <div className="filtering-header">

        {
          contract.map((e)=>(
          <button className="btn-1" onClick={()=>{handle(e)}}>{e}</button>

          ))
        }
     
      </div>
    </div>
  );
};

export default Search;
