
import React from "react";
import '../App.css'
export default function Die(props){
  
    const style={
      backgroundColor: props.isHeld? "#59E391" :"white"
    }
  return(  <div className="die--face " style={style} onClick={props.holdDice}>
    <h2 className="die--num" >{props.num}</h2>
    </div>)
    
    
}