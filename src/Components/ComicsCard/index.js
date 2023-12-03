import { useState } from "react";
import './style.css'
const ComicsCard =(props)=> {
const[isopen,Setopen]=useState(false)
return(
<div>
<img  onClick={()=> {Setopen(true)}}   src={props.src + "." + props.extn} />

{isopen? < div onClick={()=> {Setopen(false)}} className="ComicCard"> 

<img className="InsImage" onClick={()=> {Setopen(true)}}   src={props.src + "." + props.extn} />
<div className="SecondDivPara">
 <h3 className="para" > {props.title}</h3>
 <p  className="para"   > {props.description}</p>
 </div>


 
 
 </div>  :null }

</div>

)
}


export default ComicsCard;