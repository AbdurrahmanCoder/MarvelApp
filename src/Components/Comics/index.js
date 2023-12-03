import React from "react";
import './style.css';
import { useState, useEffect } from "react";
import ComicsCard from "../ComicsCard";
const Comics = () => {
const [optionsState, SetoptionsState]=useState(2000)
 
const [urls,setUrls] = useState(`https://gateway.marvel.com/v1/public/comics?dateRange=2000-01-01,2000-12-30&ts=1&apikey=034694b1c270bde129c2a36ad958a13d&hash=84aecccbcfa5078f1e9a557e023d1504`)
const[data,setData] = useState([])
 
 

function HandleClick(){
  
  setUrls(`https://gateway.marvel.com/v1/public/comics?startYear=2023&ts=1&apikey=034694b1c270bde129c2a36ad958a13d&hash=84aecccbcfa5078f1e9a557e023d1504`)

}



function HandleClick2(){
  
  setUrls(`https://gateway.marvel.com/v1/public/comics?startYear=2018&ts=1&apikey=034694b1c270bde129c2a36ad958a13d&hash=84aecccbcfa5078f1e9a557e023d1504`)

}
function HandleClick3(){
  
  setUrls(`https://gateway.marvel.com/v1/public/comics?startYear=2008&ts=1&apikey=034694b1c270bde129c2a36ad958a13d&hash=84aecccbcfa5078f1e9a557e023d1504`)

}

function dataFunc(e)
{
  SetoptionsState(e.target.value)

  setUrls(`https://gateway.marvel.com/v1/public/comics?startYear=${optionsState}&ts=1&apikey=034694b1c270bde129c2a36ad958a13d&hash=84aecccbcfa5078f1e9a557e023d1504`)


}

console.log(optionsState)



useEffect(() => {
    fetch(urls)
    .then(response => response.json())  
  
     .then(data => setData(data.data.results)); 
    }, [urls]);
    console.log(data) 
  
    return (  
      <>
<div className="form-select"> 
  <button onClick={HandleClick}>
  New Releases
  </button>
  <button onClick={HandleClick2}>
  Best Selling
  </button>

  <button onClick={HandleClick3}>
  popular
  </button>

  <select className="select" onChange={dataFunc} >
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>



</select>




   
  </div>  
 <div className="Main__div">  
{data.map((collec,index) => (  
    <ComicsCard  title={collec.title}   description={collec.description}  src={collec.thumbnail.path} extn={collec.thumbnail.extension} />  
 
  ))
}

  
</div>

</>
);
  

 

};
export default Comics; 