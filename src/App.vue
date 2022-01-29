<template>  
  <the-navbar></the-navbar>
  <router-view/>
</template>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}
/* nunito-sans-300 - latin */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('fonts/nunito-sans-v11-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('fonts/nunito-sans-v11-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* nunito-sans-600 - latin */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('fonts/nunito-sans-v11-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('fonts/nunito-sans-v11-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* nunito-sans-800 - latin */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url('fonts/nunito-sans-v11-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('fonts/nunito-sans-v11-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* Vars */
:root {
  --main-font-family: 'Nunito Sans', sans-serif;
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
  color: var(--white);
  background: var(--darker-blue);
}
a{
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}
.container {
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;
}
.shadow {
  box-shadow: 0 0 8px 3px rgba(26, 26, 26, 0.1);
}

@media screen and (min-width: 1440px) {
  .container {
    max-width: 1360px;
  }
}
</style>
