<script setup>
import NeoStatus from '../components/NeoStatus.vue'
import axios from 'axios'
import {onMounted, ref} from 'vue'
import {FwbInput} from 'flowbite-vue'
import { HiArrowCircleRight } from "oh-vue-icons/icons";

var data = ref([]);
var newEndpoint = ref("")

onMounted(()=>{
  axios('http://localhost:8085/api/endpoints')
    // .then((r)=> {r.json()})
    .then((r)=> data.value = r.data)
    .then((r)=> console.table(data.value))

})

function trackNewEndpoint(){
  if(newEndpoint.value.charAt(0) != '/')[
    newEndpoint.value = '/' + newEndpoint.value
  ]
  axios.post('http://localhost:8085/api/endpoint', {link: newEndpoint.value }).then((res)=> alert(JSON.stringify(res)))
}

</script>

<template>
  <div class="main">
    <div class='title'>
      <h1>iTec Monitor</h1>
      <p>Stalking your endpoints so you don't have to!</p>
    </div>
    <br/>

    <div class="addition-container">
      <textarea v-model="newEndpoint" placeholder="Endpoint"></textarea>
      <button @click="trackNewEndpoint"> <v-icon name="hi-arrow-circle-right"></v-icon> </button>
    </div>

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

.addition-container{
  display: flex;
  justify-content: center;
  border: solid 1px;
  margin:5px;
  border-radius: 15em;
  border-color: #fbfbff;

}
.addition-container textarea{
  width: 80%;
  background-color: #000000;
  color: #fbfbff;
  text-align: center;
  justify-content: center;
}

.addition-container button{
  color: #fbfbff;
  background-color: #ffffff00 ;
  border: none;
}
.addition-container button:hover{
  color: #fbfbff7e;
  background-color: #ffffff00 ;
  border: none;
}

</style>
