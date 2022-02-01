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

/* Media queries */
@media (max-width: 767px) {
  .country-details {
    padding-left: 0;
  }
  .details {
    flex-direction: column;
    div {
      &:first-child {
        margin-bottom: 40px;
      }
    }
  }
  .border-countries {
    flex-direction: column;
  }
  p {
    margin: 0 0 15px;
  }
  .border-countries-list {
    width: 100%;
    margin: 0 -5px;
    .btn {
      font-size: 12px;
      min-width: 95px;
    }
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .country-details {
    padding-left: 0;
  }
  .details {
    justify-content: space-around;
  }
}

@media (min-width: 992px) and (max-width: 1024px) {
  .country-details {
    padding-left: 15px;
  }
}
</style>