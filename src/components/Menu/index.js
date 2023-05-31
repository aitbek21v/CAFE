import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import ice from '../../img/ice1.png';
import ice2 from '../../img/ice2.png';
import ice3 from '../../img/ice3.png';
import ice4 from '../../img/ice4.png';
import ice5 from '../../img/ice5.png';
import ice6 from '../../img/ice6.png';
import hot from '../../img/hot.jpg';
import hot1 from '../../img/hot1.jpg';
import hot2 from '../../img/hot2.jpg';
import hot3 from '../../img/hot3.jpg';
import hot4 from '../../img/hot4.jpg';
import hot5 from '../../img/hot5.jpg';
import cold from '../../img/cold.jpg';
import cold1 from '../../img/cold1.jpg';
import cold2 from '../../img/cold2.jpg';
import cold3 from '../../img/cold3.jpg';
import cold4 from '../../img/cold4.jpg';
import cold5 from '../../img/cold5.jpg';
import nat from '../../img/nat.jpg';
import nat1 from '../../img/nat1.jpg';
import nat2 from '../../img/nat2.jpg';
import nat3 from '../../img/nat3.jpg';
import nat4 from '../../img/nat4.jpg';
import nat5 from '../../img/nat5.jpg';
import fast from '../../img/fast.jpg';
import fast1 from '../../img/fast1.jpg';
import fast2 from '../../img/fast2.jpg';
import fast3 from '../../img/fast3.jpg';
import fast4 from '../../img/fast4.jpg';
import fast5 from '../../img/fast5.jpg';
import eas from '../../img/eas.jpg';
import eas1 from '../../img/eas1.jpg';
import eas2 from '../../img/eas2.jpg';
import eas3 from '../../img/eas3.jpg';
import eas4 from '../../img/eas4.jpg';
import eas5 from '../../img/eas5.jpg';

import line from "../../img/lineabout.svg"
import {MdSearch} from "react-icons/md";
import {AiOutlineCloseCircle} from "react-icons/ai";
import Search from "../Search";

// const Menu = () => {
//     const [activeMenu, setActiveMenu] = useState(0);
//     const [desert, setDesert] = useState(0);
//
//     const [tabs, setTabs] = useState([
//         {
//             title: 'Desserts',
//             image: ice,
//             name: "Ice Cream",
//             description: "soda, cream, milk, sugar",
//             price: "$9.11",
//             h1: "Extras",
//             h2: "Drinks",
//             cherry: "Cherry",
//             cola: "Cola Cola",
//             coin: "$0.90"
//         },
//
//         {
//             title: 'Hot Drinks',
//             image: ice2,
//
//         },
//         {
//             title: 'Cold Drinks',
//             image: ice3,
//         },
//         {
//             title: 'National Foods',
//             image: ice4,
//         },
//         {
//             title: 'Eastern cuisine',
//             image: ice5,
//         },
//         {
//             title: 'Fast foods',
//             image: ice6,
//         },
//     ]);
//     const [tabs2, setTabs2] = useState([
//         {
//             title: 'Desserts',
//             cards: [
//                 {
//                     image: ice,
//                     name: "Ice Cream",
//                     description: "soda, cream, milk, sugar",
//                     price: "$9.11",
//                 },
//                 {
//                     image:ice,
//                     name: "Cake",
//                     description: "flour, sugar, eggs, butter",
//                     price: "$12.99",
//                 },
//             ]
//         },
//         {
//             title: 'Hot Drinks',
//             cards: [
//                 {
//                     image: ice2,
//                     name: "Coffee",
//                     description: "coffee beans, water, milk, sugar",
//                     price: "$4.99",
//                 },
//                 {
//                     image: ice2,
//                     name: "Tea",
//                     description: "tea leaves, water, honey",
//                     price: "$3.99",
//                 },
//             ]
//         },
//         // Другие меню и карточки...
//     ]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedCardIndex, setSelectedCardIndex] = useState(null);
//     const [removedCard, setRemovedCard] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const getDesert = (index) => {
//         setDesert(index);
//     };
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//
//     useEffect(() => {
//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//         };
//
//         window.addEventListener('resize', handleResize);
//
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);
//     const [selectedMenu, setSelectedMenu] = useState('Desserts');
//     const handleTabClick = (index) => {
//         setSelectedMenu(tabs[index].title);
//         setActiveMenu(index)
//     };
//
//
//     const handleCardClick = (index) => {
//         if (windowWidth <= 320) {
//             window.location.href = '/description';
//         } else {
//             setSelectedCardIndex(index);
//             setRemovedCard(tabs[index]);
//             setShowModal(true);
//             setSelectedImage(tabs[index].image);
//         }
//     }
//
//     const handleCancel = () => {
//         setTabs((prevTabs) => {
//             const updatedTabs = [...prevTabs];
//             updatedTabs[selectedCardIndex] = removedCard;
//             return updatedTabs;
//         });
//         setShowModal(false);
//         setSelectedCardIndex(null);
//     };
//
//     return (
//         <div id="menu">
//             <div className="menu">
//                 <div className="search">
//                     <div className="search--full">
//                         <div className="search--full__title">
//                             <img src={line} alt="img"/>
//                             <h1>Menu</h1>
//                         </div>
//                         <button><MdSearch/></button>
//                     </div>
//                 </div>
//                 <ul className="menu--list">
//                     {tabs.map((tab, index) => (
//                         <li key={index}>
//                             <NavLink to="/menu">
//                                 <center>
//                                     <button
//                                         className={`menu--list__link ${activeMenu === index ? 'active' : ''}`}
//                                         onClick={() => handleTabClick(index)}
//                                     >
//                                         {tab.title}
//                                         <div className={`line ${activeMenu === index ? 'activate' : ''}`}/>
//                                     </button>
//                                 </center>
//                             </NavLink>
//                         </li>
//                     ))}
//                 </ul>
//                 <div className="menu--content">
//                     {showModal && (
//                         <div className="modal">
//                             <div className="modal--button cancel-button" onClick={handleCancel}>
//                                <AiOutlineCloseCircle/>
//                             </div>
//                             <div className="modal__content">
//                                 <div className="modal__content__column">
//                                     {selectedImage && <img src={selectedImage} alt="Selected Image"/>}
//                                     {
//                                         tabs.map((tab) => (
//                                             <div className="modal__content__column__open">
//                                                 <div className="modal__content__column__open__name">
//                                                     <h1>{tab.name}</h1>
//                                                     <h4>{tab.description}</h4>
//                                                 </div>
//                                                 <p>{tab.price}</p>
//                                             </div>
//                                         ))
//                                     }
//                                 </div>
//
//                                 <div className="modal__content__actions">
//                                     {
//                                         tabs.map((tab) => (
//                                             <div>
//
//                                                 <div className="modal__content__actions__price">
//                                                     <div className="modal__content__actions__price__cafe">
//                                                         <h1>{tab.h1}</h1>
//                                                         <div className="modal__content__actions__price__cafe__cherry">
//                                                             <p>{tab.cherry}</p>
//                                                             <p>{tab.coin}</p>
//                                                         </div>
//                                                         <div className="modal__content__actions__price__cafe__cherry">
//                                                             <p>{tab.cherry}</p>
//                                                             <p>{tab.coin}</p>
//                                                         </div>
//
//                                                     </div>
//                                                     <div className="modal__content__actions__price__cafe">
//                                                         <h1>{tab.h2}</h1>
//                                                         <div className="modal__content__actions__price__cafe__cola">
//                                                             <p>{tab.cola}</p>
//                                                             <p>{tab.coin}</p>
//                                                         </div>
//                                                         <div className="modal__content__actions__price__cafe__cola">
//                                                             <p>{tab.cola}</p>
//                                                             <p>{tab.coin}</p>
//                                                         </div>
//                                                     </div>
//
//                                                 </div>
//                                             </div>
//                                         ))
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     <div style={{
//                         display: showModal === true ? "block" : "none"
//                     }} className={showModal === true ? "ground" : ''}></div>
//                     <h1 className="similar" style={{
//                         display: showModal === true ? "block" : "none"
//                     }}>Similar gueries</h1>
//                     {tabs.map((tab, index) => (
//                         <div key={index}>
//                             {tab.title === selectedMenu && (
//                                 <div className="card">
//                                     <div className="card">
//                                         <div
//                                             className={`some-div ${windowWidth <= 320 ? 'block' : ''}`}
//                                         >
//                                             {/* content */}
//                                         </div>
//                                         <button
//                                             className={`card--click ${desert === index ? 'desert' : ''}`}
//                                             onClick={() => getDesert(index)}
//                                         >
//                                             <img onClick={() => handleCardClick(index)} src={tab.image}
//                                                  alt=""/>
//                                         </button>
//                                         {
//                                             tabs.slice(0, 1).map((tab) => (
//                                                 <div className="card--text">
//                                                     <div className="card--text__ice">
//                                                         <h1>{tab.name}</h1>
//                                                         <h4>{tab.description}</h4>
//                                                     </div>
//                                                     <p>{tab.price}</p>
//                                                 </div>
//                                             ))
//                                         }
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
const Menu = () => {
    const [activeMenu, setActiveMenu] = useState(0);
    const [desert, setDesert] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [removedCard, setRemovedCard] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
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
    const [tabs, setTabs] = useState([
        {
            title: 'Desserts',
            image: ice,
            name: "Ice Cream",
            description: "soda, cream, milk, sugar",
            price: "$9.11",
            cards: [
                {
                    image: ice,
                    name: "Ice Cream",
                    description: "soda, cream, milk, sugar",
                    price: "$9.11",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: ice2,
                    name: "Ice Cream",
                    description: "soda, cream, milk, sugar",
                    price: "$12.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: ice3,
                    name: "Ice Cream",
                    description: "soda, cream, milk, sugar",
                    price: "$12.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: ice4,
                    name: "Ice Cream",
                    description: "soda, cream, milk, sugar",
                    price: "$12.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: ice5,
                    name: "Ice Cream",
                    description: "soda, cream, milk, sugar",
                    price: "$12.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: ice6,
                    name: "Ice Cream",
                    description: "soda, cream, milk, sugar",
                    price: "$12.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
            ]
        },
        {
            title: 'Hot Drinks',
            image: hot,
            cards: [
                {
                    image: hot,
                    name: "Espresso",
                    description: "coffee beans, water, milk, sugar",
                    price: "$4.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: hot1,
                    name: "Macchiato",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: hot2,
                    name: "Americano",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: hot3,
                    name: "Café Latte",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: hot4,
                    name: "Cappuccino",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: hot5,
                    name: "Mocha",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
            ]
        },
        {
            title: 'Cold Drinks',
            image: cold,
            cards: [
                {
                    image: cold,
                    name: "Coco Cola",
                    description: "coffee beans, water, milk, sugar",
                    price: "$4.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: cold1,
                    name: "Pepsi",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: cold2,
                    name: "Sprite",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: cold3,
                    name: "Cocktail",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: cold4,
                    name: "Diet",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: cold5,
                    name: "Fanta",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
            ]
        },
        {
            title: 'National Foods',
            image: nat,
            cards: [
                {
                    image: nat,
                    name: "Hamburgers",
                    description: "coffee beans, water, milk, sugar",
                    price: "$4.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: nat1,
                    name: "Coo Coo",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: nat2,
                    name: "Bulgogi",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: nat3,
                    name: "Kibben",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: nat4,
                    name: "Saltfish",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: nat5,
                    name: "Beze",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
            ]
        },
        {
            title: 'Eastern cuisine',
            image: eas,
            cards: [
                {
                    image: eas,
                    name: "Espresso",
                    description: "coffee beans, water, milk, sugar",
                    price: "$4.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: eas1,
                    name: "Macchiato",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: eas2,
                    name: "Americano",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: eas3,
                    name: "Café Latte",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: eas4,
                    name: "Cappuccino",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: eas5,
                    name: "Mocha",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
            ]
        },
        {
            title: 'Fast foods',
            image: fast,
            cards: [
                {
                    image: fast,
                    name: "Hamburgers",
                    description: "coffee beans, water, milk, sugar",
                    price: "$4.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: fast1,
                    name: "Fri",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: fast2,
                    name: "Egg",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: fast3,
                    name: "Sandwich",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: fast4,
                    name: "Hot Dog",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
                {
                    image: fast5,
                    name: "Taco",
                    description: "tea leaves, water, honey",
                    price: "$3.99",
                    h1: "Extras",
                    h2: "Drinks",
                    cherry: "Cherry",
                    cola: "Cola Cola",
                    coin: "$0.90"
                },
            ]
        },
        // Другие меню и карточки...
    ]);

    const handleTabClick = (index) => {
        setActiveMenu(index);
    };

    const handleCardClick = (index) => {
        if (windowWidth <= 320) {
            window.location.href = '/description#' + index;
        } else {
            setSelectedCardIndex(index);
            setRemovedCard(tabs[activeMenu].cards[index]);
            setShowModal(true);
            setSelectedImage(tabs[activeMenu].cards[index].image);
        }
    }
    const handleCancel = () => {
        setTabs((prevTabs) => {
            const updatedTabs = [...prevTabs];
            updatedTabs[activeMenu].cards[selectedCardIndex] = removedCard;
            return updatedTabs;
        });
        setShowModal(false);
        setSelectedCardIndex(null);
    };

    return (
        <div id="menu">
            <div className="menu">
                <div className="search">
                    <div className="search--full">
                        <div className="search--full__title">
                            <img src={line} alt="img"/>
                            <h1>Menu</h1>
                        </div>
                        <Link to={"/search"}>
                            <button>
                                <MdSearch/>
                            </button>
                        </Link>

                    </div>
                </div>
                <ul className="menu--list">
                    {tabs.map((tab, index) => (
                        <li key={index}>
                            <NavLink to="/menu">
                                <center>
                                    <button
                                        className={`menu--list__link ${
                                            activeMenu === index ? 'active' : ''
                                        }`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        {tab.title}
                                        <div
                                            className={`line ${
                                                activeMenu === index ? 'activate' : ''
                                            }`}
                                        />
                                    </button>
                                </center>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="menu--contents">
                    <div className="menu--content">
                        {showModal && (
                            <div className="modal">
                                <div className="modal--button cancel-button" onClick={handleCancel}>
                                    <AiOutlineCloseCircle/>
                                </div>
                                <div className="modal__content">
                                    <div className="modal__content__column">
                                        {selectedImage && <img src={selectedImage} alt="Selected Image"/>}
                                        {tabs.map((card, index) => (
                                            <div className="modal__content__column__open" key={index}>
                                                <div className="modal__content__column__open__name">
                                                    <h1>{card.name}</h1>
                                                    <h4>{card.description}</h4>
                                                </div>
                                                <p>{card.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="modal__content__actions">
                                        <div className="modal__content__actions__price">
                                            <div className="modal__content__actions__price__cafe">
                                                <h1>{tabs[activeMenu].cards[0].h1}</h1>
                                                <div className="modal__content__actions__price__cafe__cherry">
                                                    <p>{tabs[activeMenu].cards[0].cherry}</p>
                                                    <p>{tabs[activeMenu].cards[0].coin}</p>
                                                </div>
                                                <div className="modal__content__actions__price__cafe__cherry">
                                                    <p>{tabs[activeMenu].cards[0].cherry}</p>
                                                    <p>{tabs[activeMenu].cards[0].coin}</p>
                                                </div>
                                            </div>
                                            <div className="modal__content__actions__price__cafe">
                                                <h1>{tabs[activeMenu].cards[0].h2}</h1>
                                                <div className="modal__content__actions__price__cafe__cola">
                                                    <p>{tabs[activeMenu].cards[0].cola}</p>
                                                    <p>{tabs[activeMenu].cards[0].coin}</p>
                                                </div>
                                                <div className="modal__content__actions__price__cafe__cola">
                                                    <p>{tabs[activeMenu].cards[0].cola}</p>
                                                    <p>{tabs[activeMenu].cards[0].coin}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div
                            style={{
                                display: showModal === true ? 'block' : 'none',
                            }}
                            className={showModal === true ? 'ground' : ''}
                        ></div>

                    </div>
                    <h1
                        className="similar"
                        style={{
                            display: showModal === true ? 'block' : 'none',
                        }}
                    >
                        Similar gueries
                    </h1>

                    <div className="menu--content2">
                        {tabs[activeMenu].cards.map((card, index) => (
                            <div className="card" key={index}>
                                <div className="card">
                                    <div
                                        className={`some-div ${windowWidth <= 320 ? 'block' : ''}`}
                                    >
                                        {/* content */}
                                    </div>
                                    <button
                                        className={`card--click ${
                                            desert === index ? 'desert' : ''
                                        }`}
                                        onClick={() => handleCardClick(index)}
                                    >
                                        <img src={card.image} alt=""/>
                                    </button>
                                    <div className="card--text">
                                        <div className="card--text__ice">
                                            <h1>{card.name}</h1>
                                            <h4>{card.description}</h4>
                                        </div>
                                        <p>{card.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
};


export default Menu;