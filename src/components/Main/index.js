import React, {useEffect, useState} from 'react';
import line2 from "../../img/line2.svg";
import line from "../../img/lineabout.svg";
import {NavLink} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

const Main = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {

        if (windowWidth <= 320) {
            window.location.href = '/menu#' + index;
        }else{
            setActiveTab(index);
        }
    };

    const tabs = [
        {
            title: 'Desserts',
            content: (
                <div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Burger&Pasta</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Burger&Pasta</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Burger&Pasta</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Burger&Pasta</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Burger&Pasta</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Burger&Pasta</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>

                    </div>
                </div>
            ),
        },
        {
            title: 'Hot Drinks',
            content: (
                <div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Hot Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Hot Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Hot Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Hot Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Hot Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Hot Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                </div>

            ),
        },
        {
            title: 'Cold Drinks',
            content: (
                <div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Cold Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Cold Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Cold Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Cold Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Cold Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Cold Drinks</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'National Foods',
            content: (
                <div>
                    <div className="card">
                        <div className="card--text">
                            <h1>National Foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>National Foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>National Foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>National Foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>National Foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>National Foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Eastern cuisine',
            content: (
                <div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Eastern cuisine</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Eastern cuisine</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Eastern cuisine</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Eastern cuisine</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Eastern cuisine</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Eastern cuisine</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Fast foods',
            content: (
                <div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Fast foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Fast foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Fast foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Fast foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Fast foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card--text">
                            <h1>Fast foods</h1>
                            <h5>.....................................................................................</h5>
                            <h4>$24</h4>
                        </div>
                        <div className="card--order">
                            <p>
                                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet
                                pultvätta, om pneumativ.
                            </p>
                            <h3 className="card--order__chyzyc">Order Now</h3>
                        </div>
                    </div>
                </div>
            ),
        },

    ];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div id="main">
            <div className="container">
                <div className="menu ">
                    <div className="menu--title">
                        <img src={line} alt="img"/>
                        <h4>Main Menu</h4>
                        <img src={line2} alt="img"/>
                    </div>
                    <h1>Exceptional Quality. Delightfully Delicious</h1>
                </div>
                <div className="tab">
                    <ul className="tab--list">
                        {tabs.map((tab, index) => (
                            <li key={index}>
                                <center>
                                    <button
                                        className={`tab--list__link ${activeTab === index ? 'active' : ''}`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        {tab.title}
                                        <div className={`line ${activeTab === index ? 'activate' : ''}`}/>
                                    </button>

                                </center>
                            </li>
                        ))}
                    </ul>
                    {/*<div className="tab--content">{tabs[activeTab].content}</div>*/}
                    <div className="content">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`content__wrapper ${activeTab === index ? 'content__wrapper__active' : ''}`}
                            >
                                {tab.content}
                                <div
                                    className={`some-div ${windowWidth <= 320 ? 'block' : ''}`}
                                >
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="kep">
                    <div className="kep--lin"></div>
                    <NavLink to={"/menu"}>
                        <button>
                            VIEW FULL MENU <BsArrowRight className="house"/>
                        </button>
                    </NavLink>
                    <div className="kep--lin"></div>
                </div>
            </div>
        </div>
    );
};

export default Main;