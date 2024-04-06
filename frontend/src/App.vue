<script setup>
import LinkRegister from './components/LinkRegister.vue'
import Status from './components/Status.vue'
import NeoStatus from './components/NeoStatus.vue'
// import Router

const data = {}

</script>

<template>
  <div class="main">
      <RouterView></RouterView>
  </div>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
}
</style>
