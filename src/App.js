import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Counters from "./Componentes/Counters";

function App() {
  return (
    <div
      style={{
        margin: "70px auto",
        boxShadow: "4px 6px 6px gray"
      }}
     className='col-10'>
      <p>Hello World</p>
      <Counters></Counters>
    </div>
  );
}

export default App;
