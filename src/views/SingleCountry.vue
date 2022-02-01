<template>
  <section id="single">
    <div class="container">
      <div class="back">
        <button class="btn btn-large shadow" @click.prevent="back">
          <i class="fas fa-arrow-left"></i>
          Back
        </button>
      </div>      
      <transition>
        <div v-if="dataSingleStatus && dataStatus">
          <the-country :country="country"></the-country>
        </div>
      </transition>
      <transition>
        <div v-if="!dataSingleStatus && !dataStatus && !serverError.isError">
          <base-spinner></base-spinner>
        </div>
      </transition>
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
import TheCountry from '@/components/main/TheCountry.vue';

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    TheCountry
  },
  data() {
    return {
      reloaded: false
    };
  },
  computed: {
    country() {
      return this.$store.getters.singleCountry;
    },
    dataStatus() {
      return this.$store.getters.dataStatus;
    },    
    dataSingleStatus() {
      return this.$store.getters.singleCountryDataStatus;
    },
    serverError() {
      return this.$store.getters.serverError;
    }
  },
  methods: {
    getCountry() {
      if (!this.dataStatus) {
        this.$store.dispatch("getCountries");
      }
      const name = this.$route.params.name;
      if (name) {
        this.$store.dispatch('getSingleCountry', name);
      }
    },
    back() {
      this.$router.back();
    },
    hideDialog() {
      this.$store.dispatch('resetServerError');
    }
  },
  created() {
    this.getCountry();
  },
  watch: {
    $route() {
      this.getCountry();
    }
  }
}
</script>

<style lang="scss" scoped>
#single{
  padding: 80px 0;
}
.back {
  margin-bottom: 55px;
}

/* Media queries */
@media (max-width: 767px) {
  #single {
    padding: 40px 0;
    .container {
      padding: 0 30px;
    }
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  #single{
    padding: 40px 0;
  }
}
</style>