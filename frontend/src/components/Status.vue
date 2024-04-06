<template>
    <div class="continer">
            <h1 class="link">Endpoint</h1>
        <div class="segments" >
            <p1 v-for="i in Array(12).keys()">I</p1>
        </div>
        <div class="time">
            <p v-for="ora in Array(12).keys()">Ora</p>
        </div>
    </div>

</template>

<style lang="scss">
    .continer{
        display: flex;
        flex-direction: column;
        border:solid;
        border-color: #fbfbff;
        border-radius: 25px;

    }

    .link{
        display: flex;
        justify-content: center;
        border-bottom: solid;
        border-color: #fbfbff;
    }

    .segments{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
    }

    .time{
        display: flex;
        flex-direction: row ;
        justify-content: space-around;
        align-content: center;
    }

    p1:hover{
        background-color: #121212;
    }
     
</style>

<script>



</script>