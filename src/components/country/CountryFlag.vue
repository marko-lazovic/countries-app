<template>
  <div class="country-flag flag-shadow">
    <img :src="flagSrc" :alt="countryName + ' flag'" />
  </div>
</template>

<script>
export default {
  props: {
    flagSrc: {
      type: String,
      required: true,
    },
    countryName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  width: 100%;
}
.flag-shadow {
  box-shadow: 0 0 8px 15px rgba(26, 26, 26, 0.2);
}

// /* Media queries */
@media (max-width: 767px) {
  .flag-shadow {
    box-shadow: 0 0 8px 8px rgba(26, 26, 26, 0.2);
  }
}
</style>