import React, {useState} from "react";
import "./NewLocation.css";


const NewLocation = () =>{
  const [newlocation, setNewlocation] = useState({
    title:"",
    desc:"",
    address:"",
  });

  const submitHandler = (event) =>{
    event.preventDefault();
    console.log("new location page :",newlocation );
  }
  
  
  const changeHandler = (event) =>{
    const inputName = event.target.name;
    const newValue = event.target.value;
    
    setNewlocation(previousValue => {
      if(inputName === "newlocationtitle"){
        return {
          title: newValue,
           desc: previousValue.desc,
           address: previousValue.address,
        }}
      else if(inputName === "newlocationdesc"){
        return{
          title: previousValue.title,
          desc:newValue,
          address: previousValue.address,
        }}
      else if(inputName === "new"){
        return {
          title: previousValue.title,
          desc:previousValue.desc,
          address: newValue,
        }}
    })
  }


  return (
    <form className="location-form" onSubmit={submitHandler}>
     <div className="form-control">
     <label>
      Title
      <input name="newlocationtitle" type="text" required onChange={changeHandler}/>
     </label>
     </div>
     <div className="form-control" onChange={changeHandler}>
     <label>
      Description
      <textarea name="newlocationdesc" type="text" row="3" required/>
     </label>
     </div>
     <div className="form-control" onChange={changeHandler}>
     <label>
      Address
      <input name="newlocationadd" type="text"  required/>
     </label>
     </div>
     <div className="form-control" onChange={changeHandler}>
      <button>Submit</button>
     </div>
    </form>
  );
}
export default NewLocation;