
import React from "react";
import Cards from "../Cards";
 

import './style.css'

const Character = (props) => {
  return (
    <div className="CharactersContainer">
      {props.data.map((character) => {
        return <Cards  name={character.name} description ={character.description} imageUrl={character.thumbnail.path +
          "." + character.thumbnail.extension}

          
 

        />;

   
      })}
          
  
 
 
    
    </div>
 

  );

 
 

};
export default Character;

 
