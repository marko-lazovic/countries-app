<template>
  <div class="wrap shadow">
    <span class="search-icon">
      <i class="fas fa-search"></i>
    </span>
    <input
      type="text"
      name="search"
      id="search"
      class="form-control"
      placeholder="Search for a country..."
      @input="filterData"
      v-model.trim="userInput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    filterData() {
      // console.log(this.userInput);
      const userInputTLC = this.userInput.toLowerCase();
      this.$store.dispatch('filterData', userInputTLC);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  width: 100%;
}
.search-icon {
  display: flex;
  width: 75px;
  height: 55px;
  background: var(--dark-blue);
  align-items: center;
  justify-content: center;
  border-radius: 5px 0 0 5px;
}
.form-control {
  display: block;
  background: var(--dark-blue);
  color: var(--white);
  border: none;
  border-radius: 0 5px 5px 0;
  width: 100%; 
  max-width: 405px;
  outline: none;
  font-family: var(--main-font-family);
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--white);
  opacity: 1; /* Firefox */
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: var(--white);
}
::-ms-input-placeholder { /* Microsoft Edge */
  color: var(--white);
}

@media screen and (min-width: 1440px) {
  .wrap {
    max-width: 480px;
  }
}
</style>