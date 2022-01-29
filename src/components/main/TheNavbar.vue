<template>
  <nav>
    <div class="container nav-container">
      <router-link to="/" class="brand">Where in the world?</router-link>
      <div class="switch">
        <i class="fas fa-moon"></i>
        <span>Dark Mode</span>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background: var(--dark-blue);
  padding: 30px 0;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  color: var(--white);
  font-weight: 800;
  font-size: 20px;
  line-height: 1;
}
.switch {
  font-size: 14px;
  line-height: 1;  
  span{
    font-weight: 600;
    display: inline-block;
    margin-left: 5px;
  }
}
</style>