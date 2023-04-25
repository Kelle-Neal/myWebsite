import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../context.js";

function NavBar() {
  //const [ state, dispatch ] = useGlobalState();
  const [ state ] = useGlobalState();

  return (
    <nav>
      <ul style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-evenly", listStyle: 'none' }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {
          !state.currentUser && (
            <li>
              <NavLink to="/About">About Me</NavLink>
            </li>
          )
        }
        {
          !state.currentUser && (
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          )
        }
        {
          !state.currentUser && (
            <li>
              <NavLink to="/Portfolio">Portfolio</NavLink>
            </li>
          )
        }
        
      </ul>
    </nav>
  );
}

export default NavBar;
