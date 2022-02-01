<template>
  <div class="wrap">
    <dialog open>
      <header>
        <h3>Someting went wrong...</h3>
      </header>
      <div class="content">
        <slot></slot>
      </div>
      <menu>
        <button type="button" class="btn" @click="closeDialog">Close</button>
      </menu>
    </dialog>
    <div class="backdrop" @click="closeDialog"></div>
  </div>
</template>

<script>
export default {
  emits: ['close-dialog'],
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    }
  }
}
</script>

<style scoped>
.wrap,
.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
}
.wrap {
  justify-content: center;
  align-items: center;
}
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
dialog {
  width: 100%;
  max-width: 500px;
  background-color: var(--white);
  border: none;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.75);
  position: relative;
  z-index: 100;
}
menu {
  padding: 0;
  margin-bottom: 0;
  display: flex;
  justify-content: flex-end;
}
h3 {
  margin-top: 0;
  font-weight: 800;
}
@media (max-width: 575px) {
  dialog {
    width: calc(100% - 30px);
  }
}
</style>