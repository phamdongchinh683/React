import React from "react";
import { Link } from 'react-router-dom';
import "../../../styles/header.scss";
import Navigation from "../../../mock/test.json";
import Logo from "../../../assets/logo/logo.png";
import AuthFormComponent from "../../pages/Auth/index";
import { NavigationLinks, RouterDropdown } from "../../forms/DropDown";
import Admin from "../../pages/admin/admin";

const LogoPage = ({ image }) => {
  return (
    <div className="page-logo">
      <Link to="/">
        <img src={image} alt="Logo" className="page-image-logo" />
      </Link>
    </div>
  );
};

function Header() {
  return (
    <>
      <nav>
        <LogoPage image={Logo} />
        <NavigationLinks router={Navigation.router} status={<AuthFormComponent />} loginAdmin={<Admin TextStatus={'Admin'} LinkTo={'admin'} />} />
        <RouterDropdown routerDropdown={Navigation.router} status={<AuthFormComponent />} loginAdmin={<Admin TextStatus={'Admin'} LinkTo={'admin'} />} />
      </nav>
    </>
  );
};


export default Header;