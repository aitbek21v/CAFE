import React from 'react';
import ice from "../../img/ice1.png";

import {Link} from "react-router-dom";
import {AiOutlineCloseCircle} from "react-icons/ai";

const Description = () => {
    return (
        <div id="desc">
                <div className="desc">
                    <div className="modal">
                        <Link to={`/`}>
                            <div className="modal--button cancel-button">
                                <AiOutlineCloseCircle/>
                            </div>
                        </Link>

                        <div className="modal__content">
                            <div className="modal__content__column">
                                <img src={ice}  alt="Selected Image"/>
                                <div className="modal__content__column__open">
                                    <div className="modal__content__column__open__name">
                                        <h1>Ice cream</h1>
                                        <h4>"soda, cream, milk, sugar"</h4>
                                    </div>
                                    <p>$9.11</p>
                                </div>
                                <button style={{
                                    background:" #EF272C",
                                    border: "0.5px solid #181818",
                                    borderRadius: "2px",
                                    fontFamily: "Spartan",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "white",
                                    width: "100px",
                                    height: "30px"
                                }}>Deserts</button>
                            </div>

                            <div className="modal__content__actions">
                                <div>
                                    <div className="modal__content__actions__price">
                                        <div className="modal__content__actions__price__cafe">
                                            <div className="modal__content__actions__price__cafe__line"></div>
                                            <h1>Extras</h1>
                                            <div className="modal__content__actions__price__cafe__cherry">
                                                <p>Cherry</p>
                                                <p>$0.90</p>
                                            </div>
                                            <div className="modal__content__actions__price__cafe__cherry">
                                                <p>Cherry</p>
                                                <p>$0.90</p>
                                            </div>


                                        </div>
                                        <div className="modal__content__actions__price__cafe">
                                            <div className="modal__content__actions__price__cafe__line"></div>
                                            <h1>Drinks</h1>
                                            <div className="modal__content__actions__price__cafe__cola">
                                                <p>Cola Cola</p>
                                                <p>$0.90</p>
                                            </div>
                                            <div className="modal__content__actions__price__cafe__cola">
                                                <p>Cola Cola</p>
                                                <p>$0.90</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Description;