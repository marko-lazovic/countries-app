export default {
  countries(state) {
    return state.countries;
  },
  filteredData(state) {
    return state.filteredData;
  },
  dataStatus(state) {
    return state.isDataFetched;
  },
  singleCountry(state) {
    return state.singleCountry;
  },
  singleCountryDataStatus(state) {
    return state.isSingleCountryDataFetched;
  },
  borderCountries(state) {
    return state.borderCountries;
  }
};