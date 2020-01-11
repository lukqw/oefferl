<template>
    <div class="d-flex border-bottom-1 justify-content-between">
        <div class="d-flex w-33 flex-column justify-content-center align-items-center">
            <div class="square" :class="line.type">
                {{line.name}}
            </div>
            <div class="m-10px">
                {{line.direction}}
            </div>
        </div>
        <div class="d-flex w-33">
        </div>
        <div class="d-flex w-33 justify-content-center align-items-center">
            {{line.countdown}} {{line.countdown === 1 ? 'Minute' : 'Minutes'}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "listEntry",
        props: {
            line: Object
        }
    }
</script>

<style scoped>
    .tram {
        background-color: #e92730;
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