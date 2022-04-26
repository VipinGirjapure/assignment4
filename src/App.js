import { Route, Link, Routes, BrowserRouter} from "react-router-dom";
 import Home from "./Components/Home";
 import Students from "./Components/Student";
 import Contact from "./Components/Contact";
import React from 'react';
import './App.css';

function App() {
  return (
    <BrowserRouter>
  
    <div className="navBar">
    <Link to ="./home" className="navItems" > Home
    </Link>
    <Link to ="./students" className="navItems" > Students
    </Link>
    <Link to ="./contact" className="navItems" > Contact    </Link>
  </div>
 <Routes>
<Route exact path ="/home" element ={<Home/>} />
<Route exact path ="/students" element ={<Students/>} />
<Route exact path ="/contact" element ={<Contact/>} />
  </Routes>
 </BrowserRouter>
   
   
  );
}

export default App;

