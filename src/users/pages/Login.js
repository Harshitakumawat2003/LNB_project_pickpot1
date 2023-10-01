import React, {useState} from "react";
import "./Login.css";

const Login=()=>{
     const NewLocation = () =>{
          const [newlocation, setNewlocation] = useState({
            email:"",
            password:"",
          });
     const submitHandler=(event)=>{
        event.previousDefault();
        console.log("new location page :",newlocation);
     };
     const changeHandler=(event)=>{
        const inputName = event.target.name;
        const newValue = event.target.value;

        setNewlogin((previousValue) => {
          if(inputName === "newloginemail"){
               return{
                    email:newValue,
                    password:previousValue.password,
               }
          }
          else if(inputName === "newloginpassword"){
               return{
                    email:previousValue.email,
                    password:newValue,
               }
          }
        })
     }
     return (
          <form className="login-form" onSubmit ={submitHandler}>
               <div className="form-control">
                <label>
                    Email 
                    <input name="newloginemail" type="email" required onChange={changeHandler}/>
                </label>
               </div>

               <div className="form-control">
                <label>
                    Password 
                    <input name="newloginpassword" type="password" required onChange={changeHandler}/>
                </label>
               </div>

               <div className="form-control">
                <button>Submit</button>
               </div>

          </form>
     );
}
}
export default Login;