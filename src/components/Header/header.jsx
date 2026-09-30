import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle, MdFavorite } from "react-icons/md";
import { Link, NavLink } from "react-router";
import logo from "../../image/logo.png";
import "../../App.css";

function Header() {
    return (
        <div className="header">

            <div className="topheader">
                <p>Free Delivery on Orders Above Rs. 5,000</p>
            </div>

            <div className="mainheader">

                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                <div className="navbar">
                    <ul>

                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/shop"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Shop
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>

                <div className="icon">

                    <Link to="/cart">
                        <FaCartShopping />
                    </Link>

                    <Link to="/wishlist">
                        <MdFavorite />
                    </Link>

                    <Link to="/account">
                        <MdAccountCircle />
                    </Link>

                </div>

            </div>

            <div className="searchbar">
                <input
                    type="search"
                    placeholder="Search products..."
                />
            </div>

        </div>
    );
}

export default Header;