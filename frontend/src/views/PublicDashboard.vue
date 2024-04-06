<script setup>
import NeoStatus from '../components/NeoStatus.vue'
import axios from 'axios'
import {onMounted, ref} from 'vue'

var data = ref([]);

onMounted(()=>{
  axios('http://localhost:8085/api/endpoints')
    // .then((r)=> {r.json()})
    .then((r)=> data.value = r.data)
    .then((r)=> console.table(data.value))

})




</script>

<template>
  <div class="main">
    <div class='title'>
      <h1>iTec Monitor</h1>
      <p>Stalking your endpoints so you don't have to!</p>
    </div>
    <br/>
    <NeoStatus 
      v-for="endpoint in data"
      :endpoint="endpoint.endpoint" 
      :stats="endpoint.stats" 
      :reported="endpoint.reported"/>
    
  </div>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
}

.title{
  align-self: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

}

.title h1{
  margin-top: 1.2em;
  margin: 1px;
}


</style>
