export default {
  async getCountries(context, payload) {
    if (!payload) {
      // get all countries on app load
      const response = await fetch('https://restcountries.com/v3.1/all');
      const responseData = await response.json();

      context.commit('setCountries', responseData);
      context.commit('dataStatus', true);
    } else {
      // show loading spinner again
      context.commit('dataStatus', false);
      // apply filter by region
      const response = await fetch(`https://restcountries.com/v3.1/region/${payload}`);
      const responseData = await response.json();

      context.commit('setCountries', responseData);
      context.commit('dataStatus', true);
    }
  },
  filterData(context, payload) {
    context.commit('setFilteredData', payload);
  }
};