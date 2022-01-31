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
        <div v-if="dataStatus">
          {{ country }}
        </div>
      </transition>
      <div v-if="!dataStatus">
        <base-spinner></base-spinner>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    country() {
      return this.$store.getters.singleCountry;
    },
    dataStatus() {
      return this.$store.getters.singleCountryDataStatus;
    }
  },
  methods: {
    getCountry() {
      const name = this.name.toLowerCase();
      this.$store.dispatch('getSingleCountry', name);
    },
    back() {
      this.$router.back();
    }
  },
  created() {
    this.getCountry();
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
</style>