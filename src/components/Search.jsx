import React from 'react'
import './Search.scss'
const Search = ({ searchCountry }) => {
    return (
     <div className="search">
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