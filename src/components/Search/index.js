import React from 'react';
import { MdSearch } from "react-icons/md";

const Search = () => {
    return (
        <div id="search">
            <div className="container">
                <div className="search">

                    <div className="search--button">
                        <MdSearch />
                    </div>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Поиск"
                    />

                    <button className="search-button"><MdSearch /></button>
                    <input type="text" placeholder="Search" className="search-input" />
                </div>
            </div>
        </div>
    );
};

export default Search;