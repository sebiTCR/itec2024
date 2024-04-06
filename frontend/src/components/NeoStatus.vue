<script setup>
import NeoIndicator from "./NeoIndicator.vue"

const props = defineProps(['reported', 'endpoint', 'stats'])
</script>

<template>
    <div class="container">
        <h4> {{ props.endpoint }} </h4>
        <NeoIndicator class="indicator" :stats="props.stats"/>
    </div>
</template>

<style scoped>
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