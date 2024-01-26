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
        const response = await axios.get('/api/all');
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
    <div className="container">
      <header>
        <h1 className="title">Where in the world?</h1>
        
      </header>
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
    </div>
  );
};

export default App;