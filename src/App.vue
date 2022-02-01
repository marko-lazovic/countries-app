<template>  
  <the-navbar></the-navbar>
  <router-view/>
</template>

<script>
export default {
  methods: {
    getCountries() {
      this.$store.dispatch("getCountries");
    },
  },
  created() {
    this.getCountries();
  },
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}
/* nunito-sans-300 - latin-ext */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('fonts/nunito-sans-v11-latin-ext-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('fonts/nunito-sans-v11-latin-ext-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* nunito-sans-600 - latin-ext */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('fonts/nunito-sans-v11-latin-ext-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('fonts/nunito-sans-v11-latin-ext-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* nunito-sans-800 - latin-ext */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url('fonts/nunito-sans-v11-latin-ext-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('fonts/nunito-sans-v11-latin-ext-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* Vars */
:root {
  --main-font-family: 'Nunito Sans', sans-serif;
  --grid-padding: 40px;
  --row-margin: -40px;
  --col-margin: 80px; 
  --dark-blue: hsl(209, 23%, 22%);
  --darker-blue: hsl(207, 26%, 17%);
  --darkest-blue: hsl(200, 15%, 8%);
  --dark-gray: hsl(0, 0%, 52%);
  --very-light-gray : hsl(0, 0%, 98%);
  --white: hsl(0, 0%, 100%);
}

body, html {
  margin: 0;
  padding: 0;
}
body {
  font-family: var(--main-font-family);
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: var(--white);
  background: var(--darker-blue);
}
a{
  text-decoration: none;
  color: var(--white);
  transition: color 0.2s ease-in-out;
  &:hover {
    color: var(--dark-gray);
  }
}
strong{
  font-weight: 600;
}
.container {
  width: 100%;
  padding: 0 var(--grid-padding);
  margin: 0 auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 var(--row-margin);
}
.col {
  display: block;
  width: 100%;
  padding: 0 var(--grid-padding);
  margin-bottom: var(--col-margin);
}
.shadow {
  box-shadow: 0 0 8px 3px rgba(26, 26, 26, 0.2);
}
.btn {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 100px;
  border: none;
  border-radius: 5px;
  background: var(--dark-blue);
  color: var(--white);
  padding: 8px 10px;
  min-width: 100px;
  font-family: var(--main-font-family);
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    background: var(--darkest-blue);
    color: var(--very-light-gray);
  }
  &.btn-large{
    padding: 13px 26px;
    min-width: 135px;
  }
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}


/* Mediaqueries */
@media (max-width: 767px) {
  :root {
    --col-margin: 40px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .col {
    width: 50%;
  }
}

@media screen and (min-width: 992px) {
  .col {
    width: 25%;
  }
}

@media screen and (min-width: 1440px) {  
  .container {
    max-width: 1360px;
  }
}
</style>
