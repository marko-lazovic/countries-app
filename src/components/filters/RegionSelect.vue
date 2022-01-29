<template>
  <div class="dropdown-wrap">
    <div @click="toggleList" class="dropdown shadow">
      <span>Filter by Region</span>
      <span class="arrow">
        <i class="fas fa-angle-down"></i>
      </span>
    </div>
    <transition name="list">
      <ul v-if="isListVisible" class="shadow">
        <li v-for="reg in regions" :key="reg" @click="selectRegion(reg)">
          {{ reg }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isListVisible: false,
      regions: ["Africa", "America", "Asia", "Europe", "Oceania"],
    };
  },
  methods: {
    toggleList() {
      this.isListVisible = !this.isListVisible;
    },
    selectRegion(region) {
      console.log(region);
      this.isListVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-wrap {
  position: relative;
  font-size: 14px;
  line-height: 1;
}
.dropdown {
  background: var(--dark-blue);
  width: 200px;
  height: 55px;
  border-radius: 5px;
  padding: 0 18px 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: color 0.15s ease-in-out;
  &:hover {
    color: #ddd;
  }
}
ul {
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  background: var(--dark-blue);
  padding: 10px 0;
  margin: 0;
  list-style: none;
  border-radius: 5px;
  li {
    padding: 5px 25px;
    line-height: 19px;
    cursor: pointer;
    transition: color 0.15s ease-in-out;
    &:hover {
      color: var(--dark-gray);
    }
  }
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  top: 40px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.15s ease-in-out;
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
  top: 60px;
}
</style>