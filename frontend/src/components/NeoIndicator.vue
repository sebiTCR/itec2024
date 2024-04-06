<template>
    <div class="indicator-container">
        <p v-for="property in statesStyles" class="status" :style="property"><b>I</b></p>
    </div>
</template>


<style>
.indicator-container{
    display: flex;
    flex-direction: row;
    gap: 0px;
    width: 50%;
    padding: 0px;
    margin: 0px;
    justify-content: center;
    font-size: 2em;
}


</style>

<script setup>
const props = defineProps(['stats'])
var states
var statesStyles = []
var displayers = 0

states = props.stats
if(states.lenght > 12){
    //FIXME: FIX SPLICING
    states = states.slice(states.lenght - 12, states.lenght)
}

//Fill with received data
for(const state in props.stats){
    if(state == 0)
        statesStyles.push("color: #008148;")
    else if(state == 1)
        statesStyles.push("color: #FFBA08;")
    else if(state == 2)
        statesStyles.push("color: #D7263D;")
    else
        statesStyles.push("color: #1F1F1F;")
}



//Fill the blanks
while(statesStyles.lenght < 12){
    statesStyles.push("color: #1F1F1F;")
    console.log("Adding")
}

</script>