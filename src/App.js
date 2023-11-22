import React from "react";
import Home from "./proj/Home";
import About from "./proj/About";
import Items from "./proj/Items";
import Contact from "./proj/Contact";
import Company from "./proj/Company";
import "./App.css";


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/items">Items</Link>
            </li>
            <li>
              <Link to="/contact">Concat</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/items" Component={Items} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Company" Component={Company} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
