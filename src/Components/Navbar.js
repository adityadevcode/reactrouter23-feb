import React from "react";
// import { Link } from "react-router-dom";
// by default navlink recieve active class for current route
import { NavLink } from "react-router-dom";
// we are adding style props on both navlinks, we can use index.css as well
// navlink component is specifically meant to build component navbar or breadcrumbs to highlight current select item and 
// and useful content for screen readers
//upto now we have followed different approches how to navigate different routes using link and nav link components
//  some time we need to programatically route to particular route 
// example: placing an order in amazon if form sumbission is successful(We will be navigated to order confirmation page)
// this is scenario is used form submission 
//we are implmenting button click handler we programmatically navigate to different route application 


const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav>
      <NavLink style={navLinkStyles} to="/">
        Home{" "}
      </NavLink>
      <NavLink style={navLinkStyles} to="/About">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/ApplicationForm">
        ApplicationForm
      </NavLink>
      <NavLink style={navLinkStyles} to="/Reachus">
        Reachus
      </NavLink>
      <NavLink style={navLinkStyles} to="/OrderSummary">
      OrderSummary
      </NavLink>
    </nav>
  );
};

export default Navbar;
