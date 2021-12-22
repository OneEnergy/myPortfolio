import React, {useState} from "react";

import NavBar from "./components/nav";
import Home from "./components/home";
import "./App.css"
function App(){
  return(
    <div>
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App