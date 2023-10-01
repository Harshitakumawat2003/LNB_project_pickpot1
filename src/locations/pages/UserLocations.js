import React from "react";
import {useParams} from "react-router-dom";

import LocationsList from "../components/LocationsList";

const UserLocations =()=>{
  const USER_LOCATIONS =[
 {
   id:"loc1",
   title:"Red fort",
   desc:"",
   pic:"https://i-travel.startsatsixty.com.au/articles/1525834166866_articles_Red-Fort-Delhi-Getty.jpg ",
   address:"Netaji Subhash Marg, Chandni Chowk, New Delhi, Delhi 110006",
   userid:"u1",
  },
 {
   id:"loc2",
   title:"Taj Mahal",
   desc:"",
   pic:"https://lp-cms-production.imgix.net/news/2019/06/taj-mahal.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4 ",
   address:"Taj East Gate Road, Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
   userid:"u1",
  },
 {
   id:"loc3",
   title:"Hawa Mahal",
   desc:"",
   pic:"https://upload.wikimedia.org/wikipedia/commons/9/98/Hawa_Mahal,_Jaipur,_India.jpg ",
   address:"Hawa Mahal Rd, J.D.A. Market, Jaipur, Rajasthan 302002",
   userid:"u2",
  },
  ];
  
  const userid = useParams().userid;
  const FILTERED_LOCATIONS = USER_LOCATIONS.filter((location) => location.userid === userid);

  return <LocationsList items={FILTERED_LOCATIONS} />;
}
export default UserLocations;