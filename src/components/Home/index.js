// import React, {useState} from 'react';
// import {ImLocation2} from 'react-icons/im'
// import {BsFillTelephoneFill, BsTelephoneFill} from "react-icons/bs";
// import img from "../../img/lineabout.svg"
// import img2 from "../../img/line2.svg"
// import {FaUserEdit} from "react-icons/fa";
//
//
//
// const Home = () => {
//     const [modal, setModal] = useState(false)
//     return (
//
//         <div id="home">
//             <div className="home">
//                 <div className="home--shift">
//                     <div className="home--shift__delicuios">
//                         <div className="home--shift__delicuios--lin">
//                             <img src={img} alt=""/>
//
//                         </div>
//                         <h5>Delicious</h5>
//                         <div className="home--shift__delicuios--lin">
//                             <img src={img2} alt=""/>
//
//                         </div>
//                     </div>
//                     <h1>Italian Cuisine</h1>
//                     <p>Classic steak & delicious with delightfully unexpenced twists. <br/>
//                         The Restaurant`s sunny decor was inspired by the diners</p>
//                     <div className="home--shift__delicuios--lin__lin2">
//
//                     </div>
//                     <button
//                         onClick={() => {
//                             setModal(true)
//                         }}
//                     >Reserve Your Table</button>
//                     <div className="home--shift__delicuios--lin__lin2">
//
//                     </div>
//                     <div className="home--shift__modal" style={{
//                         display: modal ? "block" : "none"
//                     }}>
//                         <div className="home--shift__modal--inputs">
//                             <h2 onClick={() => {
//                                 setModal(false)
//                             }}>&times;</h2>
//                             <div className="home--shift__modal--inputs__user">
//                                 <div className="home--shift__modal--inputs__user--icon">
//                                     <FaUserEdit/>
//                                 </div>
//                                 <div className="">
//                                     <h3>NAME</h3>
//                                     <input className="home--shift__modal--inputs__input1" type="text" placeholder="Enter your name" />
//                                 </div>
//
//                             </div>
//                             <div className="home--shift__modal--inputs__user">
//                                 <div className="home--shift__modal--inputs__user--icon">
//                                     <BsTelephoneFill/>
//                                 </div>
//                                 <div className="">
//                                     <h3>PHONE</h3>
//                                     <input type="text" placeholder="Enter your phone" />
//                                 </div>
//                             </div>
//                             <button className='btnn'>Contact</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="home--number">
//                     <div className="home--number__location">
//                         <p>Location</p>
//                         <div className="home--number__location--lin"></div>
//                         <a href="#">
//                             <ImLocation2/>
//                         </a>
//                         <p>Rua da moeda 1g,1200-275,Portugal</p>
//                     </div>
//                     <div className="home--number__location">
//                         <p>Hotline</p>
//                         <div className="home--number__location--lin"></div>
//                         <a href="tel:+996557010998">
//                             <BsFillTelephoneFill/>
//                         </a>
//                         <a href="tel:+996557 010 998">0557010998</a>
//                     </div>
//                     <div className="modal" onClick={() => {
//                         setModal(false)
//                     }} style={{
//                         display: modal === true ? "block" : "none"
//                     }}></div>
//                 </div>
//                 <div className="home--absolute">
//                     <div className="home--absolute__local1"></div>
//                     <div className="home--absolute__local2"></div>
//                     <div className="home--absolute__local3"></div>
//                 </div>
//             </div>
//
//             {/*</div>*/}
//         </div>
//     );
// };
//
// export default Home;
import React, {useState} from 'react';
import img from "../../img/lineabout.svg"
import img2 from "../../img/line2.svg"
import {AiOutlineArrowRight} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'
import {MdLocalPhone} from 'react-icons/md'
import user from "../../img/user.png"
import tel from "../../img/tel.png"


const Home = () => {
    const [open,setOpen] = useState(false)
    function getOpen(){
        if (open === false){
            setOpen(true)
        } else {
            return setOpen(false)
        }
    }



    return (
        <div style={{
            overflow:"hidden",
        }}>
            <div  style={{
                backdropFilter:open ? "blur(4px)" : "blur(0)",
            }}  id="hero">
                <div className="container">
                    <hr className="hero__line-top"/>
                    <hr className="hero__line-bottom"/>
                    <hr className="hero__line-left"/>
                    <div style={{
                        // backdropFilter:open ? "blur(4px)" : "blur(0)",
                    }} className="hero">
                        <div className="hero--block">
                            <img src={img} alt=""/>
                            <h4>Delicious</h4>
                            <img src={img2} alt=""/>
                        </div>
                        <div className="hero--main">
                            <h1>Italian Cuisine</h1>
                            <p className="hero--main__par">Classic steak & delicious with delightfully unexpenced twists.
                                The Restaurant`s sunny decor was inspired by the diners</p>
                            <div className="hero--main__decor">
                                <div/>
                                <button onClick={() =>getOpen() }>
                                    <h1>Reserve Your Table<AiOutlineArrowRight style={{
                                        marginLeft: '15px'
                                    }}/></h1></button>
                                <div/>
                            </div>
                            <div className="hero--main__modal" style={{
                                // display:open ? "block" : "none",
                                transform : open ? "translateX(200px)" : "translateX(650px)",
                            }}>
                                <div className="hero--main__modal--window">
                                    <div className="hero--main__modal--window__block">
                                        <div className="hero--main__modal--window__block--card">
                                            <img src={user} alt="img"/>
                                            <p style={{
                                                fontSize:"12px"
                                            }}>
                                                NAME
                                                <br/>
                                                <span style={{
                                                    fontSize:"17px"
                                                }}><span style={{color:"blue"}}>
                                                |
                                            </span>Enter your name</span>
                                            </p>
                                        </div>
                                        <div className="hero--main__modal--window__block--second">
                                            <img src={tel} alt=""/>
                                            <p>
                                                NAME
                                                <br/>
                                                <span>Enter your name</span>
                                            </p>
                                        </div>
                                        <button onClick={getOpen}>Contact</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero--absence">
                            <div className="hero--absence__archive">
                                <h1>Location</h1>
                                <div/>
                                <ImLocation2 className="hero--absence__archive--icon"/>
                                <h4>Rua da media 1g,1200-275,Portugal</h4>
                            </div>
                            <div className="hero--absence__select">
                                <h1>Hotline</h1>
                                <div/>
                                <MdLocalPhone className="hero--absence__select--icon"/>
                                <a style={{color:'white'}} href="tel:+1234567890">+1 (234) 567-890</a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="home--number">
                    <div className="home--number__location">
                        <p>Location</p>
                        <div className="home--number__location--lin"></div>
                        <a href="#">
                            <ImLocation2/>
                        </a>
                        <p>Rua da moeda 1g,1200-275,Portugal</p>
                    </div>
                    <div className="home--number__location">
                        <p>Hotline</p>
                        <div className="home--number__location--lin"></div>
                        <a href="tel:+996557010998">
                            <BsFillTelephoneFill/>
                        </a>
                        {/*<a href="tel:+996557 010 998">0557010998</a>*/}
                        <a style={{color:'white'}} href="tel:+1234567890">+1 (234) 567-890</a>
                    </div>
                    <div className="modal" onClick={() => {
                        setModal(false)
                    }} style={{
                        display: modal === true ? "block" : "none"
                    }}></div>
                </div>
                <div className="home--absolute">
                    <div className="home--absolute__local1"></div>
                    <div className="home--absolute__local2"></div>
                    <div className="home--absolute__local3"></div>
                </div>
            </div>


            </div>
        </div>
    );
};
export default Home;