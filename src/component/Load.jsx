import React, { useState } from 'react'

const Load = () => {
    const [note,setnote]=useState("");
  return (
    <div>
      <button 
      style={{
        width:"190px",
        height:"60px",
        borderRadius:"10px",
        backgroundColor:" #5964e0",
        color:"white",
        fontSize:"23px",
        border:"none",
        textAlign:"center",
        margin:"auto",
        cursor:"pointer",
        marginBottom:"20px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}
      
      onClick={()=> setnote("Error while getting jobs, please try again")}
      >Load More</button>
      <p style={{display:"flex",
        alignItems:"center",
        justifyContent:"center",fontSize:"27px",color:"gray",marginBottom:"50px" }}> {note} </p>
    </div>
  )
}

export default Load
