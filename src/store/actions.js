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
  },
  async getSingleCountry(context, payload) {
    context.commit('setSingleCountryDataStatus', false);
    const response = await fetch(`https://restcountries.com/v3.1/name/${payload}`);
    if (response.ok) {
      const responseData = await response.json();
      const singleCountry = responseData[0];      
      context.commit('setSingleCountry', singleCountry);
      context.commit('setSingleCountryDataStatus', response.ok);
    } else {
      console.log('Something went wrong');
      context.commit('setSingleCountryDataStatus', response.ok);
    }
  },
  getBorderCountries(context, payload) {
    context.commit('setBorderCountries', payload);
  }
};