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
  background: rgba(26, 26, 26, 0.2);
  border-radius: 10px;
  padding: 20px;
}
img {
  display: block;
  width: 100%;
}
</style>