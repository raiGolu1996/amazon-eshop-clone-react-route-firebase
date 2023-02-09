import React from "react";
import '../style/Header.css';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../components/StateProvider";

const Header = () => {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className="header">
    <Link to='/' style={{textDecoration: 'none'}}>
    <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>

    </Link>
    
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
      <Link to='/login' state={{textDecoration: 'none'}}>
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello,</span>
          <span className="nav__itemLineTwo">sign in</span>
        </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Returns</span>
          <span className="nav__itemLineTwo"> & Orders</span>
        </div>
        <Link to='/checkout' style={{textDecoration: 'none'}}>
          <div className="nav__itemBasket">
            <ShoppingCartIcon />
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
