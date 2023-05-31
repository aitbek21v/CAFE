import React, { useState } from 'react';
import { MdSearch } from "react-icons/md";

// const Search = ({ cards }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredCards, setFilteredCards] = useState([]);
//
//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };
//
//     const handleSearch = () => {
//         const filteredCards = cards?.filter((card) =>
//             card.title?.toLowerCase()?.includes(searchQuery?.toLowerCase())
//         );
//         setFilteredCards(filteredCards);
//     };
//     console.log(cards)
//     return (
//         <div id="search">
//             <div className="container">
//                 <div className="search">
//                     <input
//                         type="text"
//                         value={searchQuery}
//                         onChange={handleSearchChange}
//                         className="search-input"
//                         placeholder="Поиск"
//                     />
//                     <button className="search-button" onClick={handleSearch}><MdSearch /></button>
//                     {
//                         filteredCards?.map((card, index) => (
//                             <div className="card" key={index}>
//                                 {/* Render the filtered cards */}
//                                 {card.title}
//                             </div>
//                         ))
//                     }
//
//
//                 </div>
//             </div>
//         </div>
//     );
// };
const Search = ({ tabs }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        const filteredCards = tabs?.reduce((result, tab) => {
            const filtered = tab.cards?.filter((card) =>
                card.name?.toLowerCase().includes(searchQuery?.toLowerCase())
            );
            return [...result, ...filtered];
        }, []);
        setFilteredCards(filteredCards);
    };
    console.log(tabs)
    return (
        <div id="search">
            <div className="container">
                <div className="search">
                    <div className="search--button" onClick={handleSearch}>
                    <MdSearch />
                </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="search-input"
                        placeholder="Поиск"
                    />

                    {filteredCards?.map((card, index) => (
                        <div className="card" key={index}>
                            {/* Render the filtered cards */}
                            {card.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Search;