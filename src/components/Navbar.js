import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <h3>products</h3>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer className="header-cart">
            <span className="mr-2">
              <img className="cartlog" src="https://png.pngtree.com/png_detail/20181017/flame-shopping-cart-icon-png-clipart_810185.png" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  
  background-image: url("https://freefeast.info/wp-content/uploads//2013/07/navigationbar@2x1.png");
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  .cartlog {
    width: 60px !important;
    height: 30px !important;
  }
  .nav-link{
    color: var(--mainDark) !important;

  }
  .header-cart{
    background-color: var(--lightBlue);

  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;