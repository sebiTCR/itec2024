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

states = props.stats
if(states.length > 12){
    //FIXME: FIX SPLICING
    states = states.slice(states.length - 12, states.length)
    console.log(states.length)
}

//Fill with received data
states.map((state)=>{
    switch(state.status){
        case 0:
            statesStyles.push("color: #008148;")
            break;
        case 1:
            statesStyles.push("color: #FFBA08;")
            break;
        case 2:
            statesStyles.push("color: #D7263D;")
            break;
        default:
            statesStyles.push("color: #333333;")
            break
    }
})


//Fill the blanks
while(statesStyles.length < 12){
    statesStyles.push("color: #1F1F1F;")
    console.log("Adding")
}


console.log(`num props: ${statesStyles.length}`)

</script>