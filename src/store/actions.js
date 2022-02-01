export default {
  async getCountries(context, payload) {
    if (!payload) {
      try {
        // get all countries on app load
        const response = await fetch('https://restcountries.com/v3.1/all');
        const responseData = await response.json();

        context.commit('setCountries', responseData);
        context.commit('dataStatus', response.ok);
      } catch (err) {
        context.commit('showServerError', {
          isError: true,
          msg: err + '. Please try again later.'
        });
      }
    } else {
      try {
        // show loading spinner again
        context.commit('dataStatus', false);
        // apply filter by region
        const response = await fetch(`https://restcountries.com/v3.1/region/${payload}`);
        const responseData = await response.json();

        context.commit('setCountries', responseData);
        context.commit('dataStatus', true);
      } catch (err) {
        context.commit('showServerError', {
          isError: true,
          msg: err + '. Please try again later.'
        });
      }      
    }
  },
  filterData(context, payload) {
    context.commit('setFilteredData', payload);
  },
  async getSingleCountry(context, payload) {
    try {
      context.commit('setSingleCountryDataStatus', false);

      const response = await fetch(`https://restcountries.com/v3.1/name/${payload}`);
      const responseData = await response.json();
      const singleCountry = responseData[0];

      if (!response.ok) {
        context.commit('showServerError', {
          isError: true,
          msg: response.statusText
        });
      }
      
      context.commit('setSingleCountry', singleCountry);
      context.commit('setSingleCountryDataStatus', response.ok);
    } catch (err) {
      context.commit('showServerError', {
        isError: true,
        msg: err + '. Please try again later.'
      });
    }
    
  },
  getBorderCountries(context, payload) {
    context.commit('setBorderCountries', payload);
  },
  resetServerError(context) {
    const resetErr = {
      isError: false,
      msg: ''
    }
    context.commit('showServerError', resetErr);
  }
};