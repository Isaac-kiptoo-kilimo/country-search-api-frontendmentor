import React from 'react'

import search from '../assets/search.svg'

import './Search.scss'

const Search = ({ searchCountry }) => {
    return (
     <div className="search">
        <img src={search} alt="" />
         <input
        type="search"
       
        name="search"
        onChange={searchCountry}
        placeholder="Search for a country..."
      />
     </div>
    );
  }
  

export default Search