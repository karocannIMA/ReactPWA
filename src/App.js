import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home';
import About from './About';
import Users from './Users';
import {Link, Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import Dashboard from './dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route to="/dashboard/*" element={<Dashboard />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>}/>kt
        <Route path="users" element={<Users/>} />
      </Route>
    </Routes>
    </>
  );

}

export default App;