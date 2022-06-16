import React from 'react'; 
import './App.css';
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/courses' component={CourseHome} />
        </Routes>
    </Router>
       

    </>
  )
}

export default App;
