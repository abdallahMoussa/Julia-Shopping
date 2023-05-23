import React from "react";
import classes from "./Header.module.css";
import Search from "./Search";
import { useSelector } from "react-redux";

import logo from "../../assets/julia.png";
// import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import ModeBtn from "./DarkModeBtn";

function Header() {
  const cartItemsLength = useSelector((store) => store.cart.items.length);
  const WishListLength = useSelector((store) => store.wishList.items.length);

  return (
    <nav className={`${classes.header} dark:bg-blue-950`}>
      <section className={`${classes["small-screen"]} dark:bg-blue-950`}>
        <div className={classes["bottom-icons"]}>
          <ul  className="dark:text-white">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <AiOutlineHome />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <BsCart4 />
                <span>Shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <BiShoppingBag />
                {cartItemsLength === 0 ? undefined : (
                  <span className={classes.number}>{cartItemsLength}</span>
                )}
                <span>Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/wish-list">
                <AiOutlineHeart />
                {WishListLength === 0 ? undefined : (
                  <span
                    className={`${classes.number} ${classes["whish-list"]}`}
                  >
                    {WishListLength}
                  </span>
                )}
                <span>Whish List</span>
              </NavLink>
            </li>
            <li>
              <ModeBtn  classes="w-6 h-6 -mt-3"/>
              <span className="-mt-[12px]">Mode</span>

            </li>
          </ul>
        </div>
      </section>

      <section className={classes.up}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="" className="my-3" />
          </Link>
        </div>
        <div className={classes.search}>
          <Search />
        </div>
        <div className={classes.icons}>
          <ul className="dark:text-white">
            <li>
              <Link to="/">
                <AiOutlineHome className={classes.icon} />
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <BsCart4 className={classes.icon} />
              </Link>
            </li>
            <li>
              <Link to="/wish-list">
                <AiOutlineHeart className={classes.icon} />
                {WishListLength === 0 ? undefined : (
                  <span>{WishListLength}</span>
                )}
              </Link>
            </li>

            <li>
              <Link to="/cart">
                <BiShoppingBag className={classes.icon} />
                {cartItemsLength === 0 ? undefined : (
                  <span>{cartItemsLength}</span>
                )}
              </Link>
            </li>
            <li>
              <AiOutlineUser className={classes.icon} />
            </li>
            <li>
              <ModeBtn classes="h-8 w-8" />
            </li>
          </ul>
        </div>
      </section>
      <section className={classes.down}></section>
    </nav>
  );
}

export default Header;
