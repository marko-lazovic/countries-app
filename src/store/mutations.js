export default {
  setCountries(state, payload) {
    state.countries = payload;    
  },
  dataStatus(state, payload) {
    state.isDataFetched = payload;
  }
};