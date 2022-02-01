<template>
  <section id="single-country">
    <div class="cols">
      <country-flag
        :flagSrc="country.flags.svg"
        :countryName="country.name.common"
      ></country-flag>
    </div>
    <div class="cols">
      <country-details :country="country"></country-details>
    </div>    
  </section>
</template>

<script>
import CountryFlag from "@/components/country/CountryFlag.vue";
import CountryDetails from "@/components/country/CountryDetails.vue";

export default {
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
  components: {
    CountryFlag,
    CountryDetails,
  },
  created() {
    console.log(this.country);
  },
};
</script>

<style lang="scss" scoped>
#single-country {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.cols {
  width: 100%;
  &:first-child {
    margin-bottom: 40px;
  }
}

@media screen and (min-width: 992px){
  .cols {
    width: 48%;
  }
}
</style>