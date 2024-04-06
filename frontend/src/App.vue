<script setup>
import LinkRegister from './components/LinkRegister.vue'
import Status from './components/Status.vue'
import NeoStatus from './components/NeoStatus.vue'


const placeholder_one = {
  link: "/home/data/",
  reported: false,
  stats: [
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 2 },
    { date: Date.now(), status: 2 },
    { date: Date.now(), status: 2 },
    { date: Date.now(), status: 0 },
  ]
}

const placeholder_two = {
  link: "/home/data/",
  reported: true,
  stats: [
    { date: Date.now(), status: 2 },
    { date: Date.now(), status: 2 },
    { date: Date.now(), status: 2 },
    { date: Date.now(), status: 1 },
    { date: Date.now(), status: 1 },
  ]
}

const placeholder_three = {
  link: "/home/products/",
  reported: false,
  stats: [
    { date: Date.now(), status: 1 },
    { date: Date.now(), status: 1 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
    { date: Date.now(), status: 0 },
  ]
}

const requests = [placeholder_one, placeholder_two, placeholder_three]
</script>

<template>
  <div class="main">
    <!-- <LinkRegister/> -->
    <NeoStatus :endpoint="placeholder_one.link" :stats="placeholder_one.stats" :reported="placeholder_one.reported"/>
    <NeoStatus :endpoint="placeholder_two.link" :stats="placeholder_two.stats" :reported="placeholder_two.reported"/>
    <NeoStatus :endpoint="placeholder_three.link" :stats="placeholder_three.stats" :reported="placeholder_three.reported"/>
    <AddButton></AddButton>
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
