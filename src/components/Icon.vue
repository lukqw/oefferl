<template>
        <div class="square" :class="type">
            {{name}}
        </div>
</template>

<script>
    export default {
        name: "Icon",
        props: {
            type: String,
            name: String
        }
    }
</script>

<style scoped>
    .ptTram {
        background-color: #e92730;
    }

    .ptBusNight {
        background-color: #001c7e;
    }

    .u4 {
        background-color: #319f49;
    }

    .square {
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        width: 84px;
        height: 84px;
        color: white;
        margin: 10px 10px 0 10px;
    }
</style>
