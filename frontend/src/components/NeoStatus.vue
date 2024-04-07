<script setup>
import axios from "axios";
import NeoIndicator from "./NeoIndicator.vue"
import Cookies from 'vue-cookies'

const props = defineProps(['reported', 'endpoint', 'stats'])
var isDev = (Cookies.get("token") != null)

function report(endpoint){
    if (isDev)
        axios.patch(`http://localhost:8085/api/endpoint/report`, {endpoint: endpoint}).then((r)=> alert(r.data.msg))
        return
    axios.post(`http://localhost:8085/api/endpoint/report`, {endpoint: endpoint}).then((r)=> alert(r.data.msg))
}


</script>

<template>
    <div class="container">
        <h4> {{ props.endpoint }} </h4>
        <NeoIndicator class="indicator" :reported="props.reported" :stats="props.stats"/>
        <button @click="report(props.endpoint)">
            <v-icon v-if="isDev" class='report' name="md-reportoff-outlined"></v-icon> 
            <v-icon v-else="isDev" class='report' name="md-reportgmailerrorred"></v-icon> 
        </button>
    </div>
</template>

<style scoped>
button{
    background-color: #fbfbff00;
    border-color: #fbfbff00;
    color: #fbfbff;
}

.report:hover{
    color: #FFBA08;
}

.container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    border: solid;
    border-color: #fbfbff;
    border-width: 2px;
    border-radius: 5em;
    max-height: 3em;
    padding-left: 1em;
    padding-right: 1em;

    margin: 5px;
}

.indicator{
    min-width: 25%;
    max-width: 25%;
}


h4{
    max-width: 25%;
    min-width: 25%;
}
</style>