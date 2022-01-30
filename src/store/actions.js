export default {
  async getCountries(context, payload) {
    if (!payload) {
      // get all countries on app load
      const response = await fetch('https://restcountries.com/v3.1/all');
      const responseData = await response.json();

      context.commit('setCountries', responseData);
      context.commit('dataStatus', true);
    } else {
      // apply filter by region
      console.log('Ovo je kad je poslat payload');
      console.log(payload);
    }
  }
};