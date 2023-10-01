import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";
const NavLinks = (props) =>{
     return (
          <ul className="navlinks">
               <li>
                    <NavLink to ="/" exact>Everyone</NavLink>
               </li>
               <li>
                    <NavLink to ="/u1/locations">My locations</NavLink>
               </li>
               <li>
                    <NavLink to ="/locations/new" >Add locations</NavLink>
               </li>
               <li>
                    <NavLink to ="/login">Sign in/up</NavLink>
               </li>
          </ul>
     );
};
export default NavLinks;