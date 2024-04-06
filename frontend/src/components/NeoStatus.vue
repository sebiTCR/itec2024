<script setup>
import NeoIndicator from "./NeoIndicator.vue"

const props = defineProps(['reported', 'endpoint', 'stats'])
</script>

<template>
    <div class="container">
        <h4> {{ props.endpoint }} </h4>
        <NeoIndicator class="indicator" :stats="props.stats"/>
        <p v-if="props.reported">Users have reported issues with this endpoint.</p>
        <div v-else class="emptybox"></div>
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
    border-color: rgb(217, 217, 217);
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

.emptybox{
    min-width: 25%;
    max-width: 25%;
}

p {
    color: #FF8C42;
}

h4{
    max-width: 25%;
    min-width: 25%;
}
</style>