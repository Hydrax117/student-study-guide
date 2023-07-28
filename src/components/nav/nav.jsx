import "./nav.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: white;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
export const NavBar = () => {
  return (
    <div className="Nav">
      <div className="title"></div>
      <ul className="header">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};
