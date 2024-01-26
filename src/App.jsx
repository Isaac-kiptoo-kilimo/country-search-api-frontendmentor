import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Region from './components/Region';
import Search from './components/Search';
import countryReducer from './reducer/Reducer'
import './App.scss';

const initialState = {
  countries: [],
  filteredCountries: [],
  search: '',
  region: 'All'
};


const App = () => {
  const [state, dispatch] = useReducer(countryReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        dispatch({ type: 'SET_COUNTRIES', payload: response.data });
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  const searchCountry = (e) => {
    dispatch({ type: 'SET_FILTER', field: 'search', value: e.target.value });
    dispatch({ type: 'FILTER_COUNTRIES' });
  };

  const regionFilter = (e) => {
    dispatch({ type: 'SET_FILTER', field: 'region', value: e.target.value });
    dispatch({ type: 'FILTER_COUNTRIES' });
  };

  return (
    <main>
      <div className="bars">
        <Search searchCountry={searchCountry} />
        <Region regionFilter={regionFilter} />
      </div>
      <div className="cards-grid">
        {state.filteredCountries.map(country => (
          <Card key={country.alpha3Code} country={country} />
        ))}
      </div>
    </main>
  );
};

export default App;