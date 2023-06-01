import React, {useState} from "react";
import {Link} from "react-router-dom";
import {CiSearch} from "react-icons/ci";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    const toScroll = () => {
        window.scroll(0, 3200)
    }
    const toScroll2 = () => {
        window.scroll(0, 1100)
    }
    const toScroll3 = () => {
        window.scroll(0, 4000)
    }

    return (
        <div id="header">
            <div className={`bur ${isMenuOpen ? 'open' : ''}`}>
                <div className="bur--nav">
                    <Link to={"/"}>interior</Link>
                    <Link to={"/"}>About Us</Link>
                    <Link  to={"/menu"}>Menu</Link>
                    <Link to={"/"}>Contacts</Link>
                    <div className="bur--nav__parg">
                        <p>EN</p>
                        <p>RU</p>
                        <p>KG</p>
                    </div>
                </div>
            </div>
            <div className="header">
                <Link to={"/"}>
                    <h1>Restaurant</h1>
                </Link>

                <div className="header--nav">
                    <Link onClick={toScroll} to={"/"}>interior</Link>
                    <Link onClick={toScroll2} to={"/"}>About Us</Link>
                    <Link  to={"/menu"}>Menu</Link>
                    <Link onClick={toScroll3} to={"/"}>Contacts</Link>

                </div>
                <div className="header--search">
                    <CiSearch className="sericon" />
                    <input type="text" className="header--search__input" placeholder="Search"/>
                    <select className="header--search__select">
                        <option>En</option>
                        <option>Ru</option>
                        <option>Kg</option>
                    </select>
                </div>
                <div className={`header--burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className={`header--burger__menu1 ${isMenuOpen ? "open" : ""}`}></div>
                    <div className={`header--burger__menu2 ${isMenuOpen ? "open" : ""}`}></div>
                    <div className={`header--burger__menu3 ${isMenuOpen ? "open" : ""}`}></div>
                    <div className={`header--burger__menu4 ${isMenuOpen ? "open" : ""}`}></div>


                </div>
            </div>
        </div>
    );
};

export default Header;