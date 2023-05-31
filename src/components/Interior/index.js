import React from 'react';
import logo from "../../img/lineabout.svg"
import logo2 from "../../img/line2.svg"
import cheir from "../../img/cheir.png"
import cheir2 from "../../img/cheir2.png"
import cheir3 from "../../img/cheir3.png"
import cheir4 from "../../img/cheir4.png"
import cheir5 from "../../img/cheir5.png"

import {BsFillTelephoneInboundFill} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {GrMail} from "react-icons/gr";

const Interior = () => {
    return (
        <div id="interior">
            <div className="container">
                <div className="interior">
                    <img src={logo} alt=""/>
                    <h1 className="interior--title">Modern interior</h1>
                    <img src={logo2} alt=""/>
                </div>

                <div className="slider-slap">
                    <div className="interior--images">
                        <img src={cheir} alt="" className="interior--images__img1"/>
                        <div className="interior--images__top">
                            <img src={cheir2} alt="" className="interior--images__top--1"/>
                            <div className="interior--images__top--two">
                                <img src={cheir3} alt="" className="interior--images__top--two__1"/>
                                <img src={cheir4} alt="" className="interior--images__top--two__2"/>
                            </div>
                        </div>
                        <img src={cheir5} alt="" className="interior--images__img2"/>

                        <img src={cheir} alt="" className="interior--images__img1"/>
                        <div className="interior--images__top">
                            <img src={cheir2} alt="" className="interior--images__top--1"/>
                            <div className="interior--images__top--two">
                                <img src={cheir3} alt="" className="interior--images__top--two__1"/>
                                <img src={cheir4} alt="" className="interior--images__top--two__2"/>
                            </div>
                        </div>
                        <img src={cheir5} alt="" className="interior--images__img2"/>
                        <img src={cheir} alt="" className="interior--images__img1"/>
                        <div className="interior--images__top">
                            <img src={cheir2} alt="" className="interior--images__top--1"/>
                            <div className="interior--images__top--two">
                                <img src={cheir3} alt="" className="interior--images__top--two__1"/>
                                <img src={cheir4} alt="" className="interior--images__top--two__2"/>
                            </div>
                        </div>
                        <img src={cheir5} alt="" className="interior--images__img2"/>
                    </div>

                </div>

                <div className="visit">
                    <div className="visit--title">
                        <div className="visit--title__h1">
                            <img src={logo} alt="" className="visit--title__h1--img"/>
                            <h1 className="visit--title__h1--h1">Visit Restaurant</h1>
                        </div>
                        <div className="visit--title__text">
                            <h2>Join Us for<br/>
                                Happy Hours</h2>
                            <h3>Your neighborhood</h3>
                            <p>225$.Lake Ave.Suite 1150<br/>
                                Pasadena,CA 911101</p>
                            <h3>Opening hours:</h3>
                            <p>Mon-Thu: 10:00 am - 01:00 <br/>am</p>
                            <p>Fri-Sun: 10:00 am - 02:00 am</p>
                            <button>Purchase gift card</button>
                        </div>
                    </div>
                    <div className="visit--contact">
                        <h1>contact Info</h1>
                        <h5><BsFillTelephoneInboundFill className="visit--contact__icon1"/>+771219900</h5>
                        <h5><GrMail className="visit--contact__icon1"/>motionweb312@gmail.com</h5>
                        <div>
                            <FaTelegramPlane className="visit--contact__icon2"/>
                            <AiFillInstagram className="visit--contact__icon3"/>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46803.09103807594!2d74.55521223516247!3d42.84765378060228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9fc655f0bb9%3A0x20d210594faeb18!2sMotion%20Web%20LLC!5e0!3m2!1sru!2skg!4v1684840385347!5m2!1sru!2skg"
                            width="360" height="170" style={{border: "0px", color: ""}} allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" className="visit--contact__map">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interior;