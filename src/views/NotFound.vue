<template>
  <section id="not-found">
    <div class="container">
      <h1>Ooops...</h1>
      <p>Sorry,seems that we can't find what you were looking for.</p>
      <div class="btn-wrap">
        <router-link to="/" class="btn btn-large">Back to home</router-link>
      </div>      
    </div>
  </section>
</template>

<style lang="scss" scoped>
#not-found {
  text-align: center;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-weight: 800;
  font-size: 32px;
  margin-top: 0;
}
p {
  margin: 0 0 40px;
  font-weight: 600;
  font-size: 18px;
  color: var(--very-light-gray);
}
.btn-wrap {
  max-width: 200px;
  margin: 0 auto;
}
</style>