import React from "react";
import "./Locationsitem.css";
const Locationsitem =(props)=>{
     return(
          <li className="locationitem">
           <div className="locationitem-content">
               <div className="locationitem-pic">
                    <img src={props.pic} alt={props.title} width="320px"/>
               </div>
               <div className="locationitem-intfor">
                    <h2>{props.title}</h2>
                    <h3>{props.desc}</h3>
                    <p>{props.address}</p>
               </div>

           </div>
          </li>
     )
};
export default Locationsitem;