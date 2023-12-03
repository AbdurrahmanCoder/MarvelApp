import React from "react";

import './style.css'

import { useState } from "react";
 
  const Cards = (props) => {

const [show,setShow]=useState(false)
    return (
      <>
      <div className="card"  onClick={()=>{  
        setShow(true)
      }}> 

      <img src={props.imageUrl} />  
   
<span className="legend"> {props.name} </span>  

      </div>


{show === true ? ( 
      <div className="displayData" onClick={()=>{
        setShow(false)
      }}  >
      
      <img src={props.imageUrl}/>
  {/* <img src={props.imageUrl3}/>    */}

  <div className="displayDataChild" >
  <span className="charactername" > {props.name}    </span>  
  <span> {props.description}  </span>  
  
     
      <span > {props.imageUrl2} </span>  



      </div>
      
      </div>) :null}
      </>
    );
  };
  
  

export default Cards;


