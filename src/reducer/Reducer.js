

const countryReducer = (state, action) => {
    switch (action.type) {
      case 'SET_COUNTRIES':
        return { ...state, countries: action.payload, filteredCountries: action.payload };
      case 'SET_FILTER':
        return { ...state, [action.field]: action.value };
      case 'FILTER_COUNTRIES':
        const filtered = state.countries.filter(country =>
          country.name.common.toLowerCase().includes(state.search.toLowerCase().trim())
          && (state.region === 'All' || country.region === state.region)
        );
        return { ...state, filteredCountries: filtered };
      default:
        return state;
    }
  };
  
  export default countryReducer;