import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import "./App.css";
// import Register from "./components/register/register";
import Register from "./components/register/register";
import Login from "./components/login/login";


function App() {
  return (
    <>
    <div className="titleContainer">
        <div style={{padding: "24px"}}>Welcome to HaaS Application</div>
      </div>
    <BrowserRouter>      
      <Routes>
      <Route path="/" element={<Login />}/>     
      <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
