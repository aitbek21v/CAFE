import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [modal, setModal] = useState(false)
    const toScroll = () => {
        window.scroll(0,1500)
    }
     const toScroll2 = () => {
        window.scroll(0,700)
    }
     const toScroll3 = () => {
        window.scroll(0,700)
    }

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <h1>Restaurant</h1>
                    <div className="header--nav" style={{
                        // display: modal ? "flex" : "none",
                        zIndex: modal ? "97" : ""
                    }}>
                        <Link onClick={toScroll} to={"/"}>interior</Link>
                        <Link onClick={toScroll2} to={"/"}>About Us</Link>
                        <Link onClick={toScroll3} to={"/"}>Contacts</Link>
                        <Link onClick={toScroll3} to={"/"}>Menu</Link>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className="header--search">
                        <input type="search" placeholder="   search..."/>
                        <select>
                            <option>En</option>
                            <option>Ru</option>
                            <option>Kg</option>
                        </select>
                    </div>
                    <div className="header--burger" style={{
                        zIndex: modal ? "99" : ""
                    }} onClick={() => {
                        setModal(!modal)
                    }}>
                        <div className="header--burger__menu"></div>
                        <div className="header--burger__menu"></div>
                        <div className="header--burger__menu"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;