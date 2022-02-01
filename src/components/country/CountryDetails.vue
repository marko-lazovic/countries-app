<template>
  <div class="country-details">
    <h1>{{ country.name.common }}</h1>
    <div class="details">
      <div>
        <ul class="details-list">
          <li><strong>Native Name:</strong> {{ nativeName }}</li>
          <li><strong>Population:</strong> {{ country.population }}</li>
          <li><strong>Region:</strong> {{ country.region }}</li>
          <li><strong>Subregion:</strong> {{ country.subregion }}</li>
          <li><strong>Capital:</strong> {{ country.capital[0] }}</li>
        </ul>
      </div>
      <div>
        <ul class="details-list">
          <li><strong>Top Level Domain:</strong> {{ country.tld[0] }}</li>
          <li><strong>Currencies:</strong> {{ currencies }}</li>
          <li><strong>Languages:</strong> {{ languages }}</li>
        </ul>
      </div>
    </div>
    <div class="border-countries">
      <p><strong>Border Countries: </strong></p>
      <ul class="border-countries-list" v-if="areBorderCountriesVisible">
        <li v-for="border in borderCountries" :key="border">
          <router-link :to="'/country/' + border" class="btn shadow">{{ border }}</router-link>
        </li>
      </ul>
      <!-- {{ borderCountries }} -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true,
    }
  },
  data(){
    return {
      nativeName: '',
      currencies: '',
      languages: '',
    };
  },
  computed: {
    borderCountries() {
      return this.$store.getters.borderCountries;
    },
    areBorderCountriesVisible() {
      return this.borderCountries.length !== 0 ? true : false;
    }
  },
  methods: {
    getNativeName() {
      const lang = Object.keys(this.country.languages);
      const native = this.country.name.nativeName[lang[0]].common;
      this.nativeName = native;
    },
    getCurrencies() {
      const values = Object.values(this.country.currencies).map(item => item.name);
      this.currencies = values.toString().replace(/,(?=[^\s])/g, ", ");
    },
    getLanguages() {
      const values = Object.values(this.country.languages);
      this.languages = values.toString().replace(/,(?=[^\s])/g, ", ");
    },
    getBorderCountries() {
      // console.log('getBorderCountries triggered');
      this.$store.dispatch("getCountries");
      const borders = this.country.borders;
      this.$store.dispatch('getBorderCountries', borders);
    }
  },
  created() {
    this.getNativeName();
    this.getCurrencies();
    this.getLanguages();
    this.getBorderCountries();
    // console.log('borders');
    // console.log(this.country);
  },
  watch: {
    $route() {
      this.getNativeName();
      this.getCurrencies();
      this.getLanguages();
      this.getBorderCountries();      
    }
  }
}
</script>

<style lang="scss" scoped>
.country-details {
  padding-left: 40px;
}
h1 {
  margin: 0 0 35px;
  font-size: 32px;
  line-height: 1;
  font-weight: 800;
}
.details {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 70px;
}
.details-list,
.border-countries-list {
  margin: 0;
  padding: 0;
  list-style: none;  
}
.details-list {
  li {
    padding: 5px 0;
  }
}
.border-countries {
  display: flex;
  align-items: flex-start;
}
p {
  margin: 0 15px 0 0;
  line-height: 30px;
}
.border-countries-list {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  li {
    margin: 0 5px 10px;
  }
}
</style>