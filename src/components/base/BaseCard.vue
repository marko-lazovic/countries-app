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
.card-img {
  border-radius: 5px 5px 0 0;
}
img {
  display: block;
  width: 100%;  
  height: 170px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}
.card-body {
  background: var(--dark-blue);
  padding: 30px 25px 45px;  
  height: 100%;
}
.card-title {
  margin: 0 0 20px;
}

/* Media queries */
@media (max-width: 767px) {
  img {
    height: 196px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  img {
    height: 202px;
  }
}

@media (min-width: 992px) and (max-width: 1024px) {
  img {
    height: 117px;
  }
  .card-body {
    padding: 20px;
  }
}

@media (min-width: 1200px) and (max-width: 1440px) {
  img {
    height: 146px;
  }
}
</style>