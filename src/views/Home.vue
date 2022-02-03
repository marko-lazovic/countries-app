<template>
  <section id="home">
    <div class="container">
      <div class="filters-wrap">
        <search-input></search-input>
        <region-select></region-select>
      </div>
      <div class="not-found" :class="{visible: dataNotFound}">
        <h3>No such country found, sorry.</h3>
      </div>
      <transition>
        <div v-if="dataStatus && !dataNotFound">
          <div class="row">
            <div class="col" v-for="country in countries" :key="country.cca2">
              <base-card
                :imgSrc="country.flags.svg"
                :imgAlt="country.name.common + ' flag'"
                :imgLink="'/country/' + country.name.common"
              >
                <h3>
                  <router-link :to="'/country/' + country.name.common">{{ country.name.common }}</router-link>                  
                </h3>
                <ul class="country-details">
                  <li><strong>Population:</strong> {{ country.population }}</li>
                  <li><strong>Region:</strong> {{ country.region }}</li>
                  <li><strong>Capital:</strong> {{ !!country.capital ? country.capital[0] : '-' }}</li>
                </ul>
              </base-card>
            </div>
          </div>
        </div>
      </transition>
      <div v-if="!dataStatus && !serverError.isError">
        <base-spinner></base-spinner>
      </div>
      <teleport to="body">
        <transition>
          <base-dialog v-if="serverError.isError" @close-dialog="hideDialog">
            <p>{{ serverError.msg }}</p>
          </base-dialog>
        </transition>
      </teleport>
    </div>
  </section>
</template>

<script>
import SearchInput from "@/components/filters/SearchInput.vue";
import RegionSelect from "@/components/filters/RegionSelect.vue";

export default {
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
      const status = this.dataStatus;      
      return status && notFound.length === 0 ? true : false;
    },
    serverError() {
      return this.$store.getters.serverError;
    }
  },
  methods: {
    hideDialog() {
      this.$store.dispatch('resetServerError');
    }
  }
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
.not-found {
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &.visible {
    height: 18px;
  }
}

/* MEDIAQUERIES */
@media (max-width: 767px) {
  #home {
    padding: 25px 0;
  }
  .filters-wrap {
    margin-bottom: 35px;
    flex-direction: column;
    margin-left: -25px;
    margin-right: -25px;
  }
}

@media (min-width: 992px) and (max-width: 1024px) {
  h3,
  .country-details {
    line-height: 1.3;
  }
}
</style>
