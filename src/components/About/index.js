import React from 'react';
import img from '../../img/lineabout.svg'
import img2 from '../../img/spoon.png'
import img3 from '../../img/glaze.png'

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                    <div className="about--logo">
                        <div className="about--logo__inner">
                            <img src={img} alt=""/>
                            <div className="about--logo__inner--lin"></div>
                        </div>
                        <h1>About Us</h1>
                    </div>
                    <div className="about--flavors">
                        <h1>A Journey Throught <br/>
                            Cafesio Flavors</h1>
                        <p>Try dishes that will open up new tastes for you and delight your <br/>
                            eyes with their appearance. Here you will find a cozy <br/>
                            atmosphere, excellent service and attention to each guest. <br/>
                            Book a table now and enjoy a unique experience of taste <br/>
                            discovery!</p>
                    </div>
                    <div className="about--title">
                        <img src={img2} alt=""/>
                        <img src={img3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;