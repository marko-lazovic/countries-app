<template>
  <div class="country-flag">
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
.country-flag {
  background: rgba(26, 26, 26, 0.1);
  border-radius: 10px;
  padding: 20px;
}
img {
  display: block;
  width: 100%;
}

/* Media queries */
@media (max-width: 767px) {
  .country-flag {
    padding: 10px;
    margin-left: -10px;
    margin-right: -10px;
  }
}
</style>