<script setup>
import NeoStatus from '../components/NeoStatus.vue'
import axios from 'axios'

var data;

axios('http://localhost:8085/api/endpoints').then((r)=> {
  data = r.data
  console.table(JSON.stringify(r.data))} 
).catch((e)=> console.error(e))

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
