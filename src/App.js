import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route,Redirect,Switch, } from "react-router-dom";

import Users from "./users/pages/Users";
import NewLocation from "./locations/pages/NewLocation";
import MainNavigation from "./common/components/Nevigation/MainNevigation";
import UserLocations from "./locations/pages/UserLocations";
import Login from "./users/pages/Login";
import { LoginContext } from "./common/components/context";
const App = () => {
  
  const [isloggedin, setIsloggedin] = useState(false);

  const login = useCallback(()=>{
    setIsloggedin(true);
  },[]);

  const logout = useCallback(()=>{
    setIsloggedin(false);
  },[]);
  return (
  <LoginContext.Provider value={{isloggedin, login:login, logout:logout}} >
  <Router>
    <MainNavigation/>
    <main>
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/:userid/locations" exact>
        <UserLocations/>
      </Route>
      <Route path="/locations/new" exact>
        <NewLocation />
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Redirect to="/" />
    </Switch>
    </main>
  </Router>
  </LoginContext.Provider>
  );
};

export default App;
