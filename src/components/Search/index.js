
import React from 'react';
import {MdSearch} from "react-icons/md";

const Search = () => {
    return (
        <div id="search">
            <div className="container">
                <div className="search">
                    <h1>koadpsjdioahyo</h1>
                    <input type="text" placeholder="Search"/>
                    <button><MdSearch/></button>
                </div>
            </div>
        </div>
    );
};

export default Search;
