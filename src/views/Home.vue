<template>
  <section id="home">
    <div class="container">
      <div class="filters-wrap">
        <search-input></search-input>
        <region-select></region-select>
      </div>
      <p>home</p>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SearchInput from '@/components/filters/SearchInput.vue';
import RegionSelect from '@/components/filters/RegionSelect.vue';

export default {
  name: "Home",
  components: {
    SearchInput,
    RegionSelect
  }
};
</script>

<style lang="scss" scoped>
#home {
  padding: 45px 0;
}
.filters-wrap{
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
}
</style>
