<template>
  <div class="card shadow">
    <div class="card-img">
      <router-link :to="imgLink">
        <img :src="imgSrc" :alt="imgAlt">
      </router-link>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {    
    imgSrc: {
      type: String,
      required: false
    },
    imgAlt: {
      type: String,
      required: false
    },
    imgLink: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--dark-blue);
}
img {
  display: block;
  width: 100%;
}
.card-body {
  background: var(--dark-blue);
  padding: 30px 25px 45px;  
  height: 100%;
}
.card-title {
  margin: 0 0 20px;
}
</style>