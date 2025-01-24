import { Outlet } from "react-router";
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
import { MyAppNav } from "./MyAppNav";
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Outlet is here:</h3>
      <MyAppNav />


      <Outlet />
    </div>
  );

}
