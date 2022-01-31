export default {
  setCountries(state, payload) {
    state.countries = payload;
    state.filteredData = payload;
  },
  dataStatus(state, payload) {
    state.isDataFetched = payload;
  },
  setFilteredData(state, payload) {
    if (payload !== '') {
      const filtered = state.countries.filter(entity => entity.name.common.toLowerCase().includes(payload));
      state.filteredData = filtered;
    } else {
      state.filteredData = state.countries.slice();
    }
  },
  setSingleCountry(state, payload) {    
    state.singleCountry = payload;
  },
  setSingleCountryDataStatus(state, payload) {
    state.isSingleCountryDataFetched = payload;
  }
};