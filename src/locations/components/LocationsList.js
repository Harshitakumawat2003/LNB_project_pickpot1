import React from "react";
import Locatiositem from "./Locationsitem";
import "./LocationsList.css";
const LocationsList = (props) =>{
  if(props.items.length === 0){
     return (
          <div className="center">
               <h2>No locations exits</h2>
          </div>
     );
  }
  return(
     <ul className="locationslist">
          {props.items.map((location)=>{
               return(
                    <Locatiositem
                    key={location.id}
                    id ={location.id}
                    title={location.title}
                    pic ={location.pic}
                    address= {location.address}
                    desc={location.desc}
                    />
               )
          })}
     </ul>
  )
}
export default LocationsList;