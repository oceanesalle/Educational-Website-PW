import React from 'react'; 
import './App.css';
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home"

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
        <Route exact path='/' component={Home} />
        </Routes>
    </Router>
       

    </>
  )
}

export default App;
