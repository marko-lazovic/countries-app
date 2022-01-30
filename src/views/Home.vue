<template>
  <section id="home">
    <div class="container">
      <div class="filters-wrap">
        <search-input></search-input>
        <region-select></region-select>
      </div>
      <transition>
        <div v-if="dataStatus && !dataNotFound">
          <div class="row">
            <div class="col" v-for="country in countries" :key="country.cca2">
              <base-card
                :imgSrc="country.flags.svg"
                :imgAlt="country.name.common + ' flag'"
                :imgLink="'/country/' + country.cca2"
              >
                <h3>
                  <router-link :to="'/country/' + country.cca2">{{ country.name.common }}</router-link>                  
                </h3>
                <ul class="country-details">
                  <li><strong>Population:</strong> {{ country.population }}</li>
                  <li><strong>Region:</strong> {{ country.region }}</li>
                  <li><strong>Capital:</strong> {{ !!country.capital === true ? country.capital[0] : '-' }}</li>
                </ul>
              </base-card>
            </div>
          </div>
        </div>
      </transition>
      <div v-if="dataNotFound" class="notFound">
        <h3>No such country found, sorry.</h3>
      </div>
      <div v-if="!dataStatus">
        <base-spinner></base-spinner>        
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import SearchInput from "@/components/filters/SearchInput.vue";
import RegionSelect from "@/components/filters/RegionSelect.vue";

export default {
  name: "Home",
  components: {
    SearchInput,
    RegionSelect,
  },
  computed: {
    countries() {
      return this.$store.getters.filteredData;
    },
    dataStatus() {
      return this.$store.getters.dataStatus;
    },
    dataNotFound() {
      const notFound = this.countries;
      return notFound.length === 0 ? true : false;
    }
  },
  methods: {
    getCountries() {
      this.$store.dispatch("getCountries");
    },
  },
  created() {
    this.getCountries();
  },
};
</script>

<style lang="scss" scoped>
#home {
  padding: 45px 0;
}
.filters-wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
}
h3 {
  margin: 0 0 20px;
  font-size: 18px;
  line-height: 1;
}
.country-details {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
  line-height: 1;
  li {
    padding: 5px 0;
  }
}
</style>
