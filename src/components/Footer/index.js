import React from 'react';
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--foot">
                        <h1>Restaurant</h1>
                        <div className="footer--foot__item">
                            <a href="">interior</a>
                            <a href="">About us</a>
                            <a href="">Menu</a>
                            <a href="">Contacts</a>
                        </div>
                        <div>
                            <FaTelegramPlane className="footer--foot__icon1"/>
                            <AiFillInstagram className="footer--foot__icon1" />
                        </div>
                    </div>
                </div>
                <h4>c 2023 Motion Study LLC</h4>
            </div>
        </div>
    );
};
export default Footer;