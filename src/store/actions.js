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
    const response = await fetch(`https://restcountries.com/v3.1/name/${payload}`);
    // console.log(response);
    if (response.ok) {
      const responseData = await response.json();
      // console.log(responseData[0]);
      const singleCountry = responseData[0];
      context.commit('setSingleCountry', singleCountry);
      context.commit('setSingleCountryDataStatus', response.ok);
    } else {
      console.log('Something went wrong');
      context.commit('setSingleCountryDataStatus', response.ok);
    }
  }
};