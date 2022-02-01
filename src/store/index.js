import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default createStore({
  state() {
    return {
      countries: [],
      filteredData: [],
      isDataFetched: false,
      singleCountry: null,
      isSingleCountryDataFetched: false,
      borderCountries: [],
    };
  },
  mutations,
  actions,
  getters
})
