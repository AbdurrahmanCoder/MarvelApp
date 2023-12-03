import React from "react";
import "./style.css"
  import Character from "../Character";
import { useState, useEffect } from "react";

  const Marvel = () => {
    const [url,setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=034694b1c270bde129c2a36ad958a13d&hash=84aecccbcfa5078f1e9a557e023d1504");

    const [data, setData] = useState([]);

    const [datachange , setDatachange] = useState("");

   const [ideas,SetIdeas]= useState();


 
 
  function change (e) {

    setDatachange(e.target.value)

} 
  
     const searchMarvel=()=>{
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${datachange}&ts=1&apikey=034694b1c270bde129c2a36ad958a13d&hash=84aecccbcfa5078f1e9a557e023d1504`)
      }
  
    
 
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data.data.results))
     
    }, [url]);
    console.log(data)

    

    return (
 <> 
 <div   className="Image__Divi">
       
 
<div className= "Main__searchbar" >
<input  className= "input__search" type ="text" placeholder="ENTER YOU FAVORITE CHARACTER" onChange={change} onKeyUp={searchMarvel} />


</div>
</div>

       {data !== null ? <Character data={data} /> : null} 
</>

    );
  }
  

export default Marvel;