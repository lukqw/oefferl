<template>
    <div class="d-flex justify-content-between" v-if="line.countdowns.length !== 0">
        <div class="d-flex w-33 flex-column justify-content-center align-items-center">
            <div class="square" :class="line.type">
                {{line.name}}
            </div>
            <div class="m-10px">
                {{line.towards}}
            </div>
        </div>
        <div class="d-flex w-33">
        </div>
        <div class="d-flex w-33 justify-content-center align-items-center">
            <div class="d-flex flex-column">
                <div class="text-align-right" v-for="countdown in line.countdowns" v-bind:key="countdown">
                    {{countdown}} {{countdown === 1 ? 'Minute' : 'Minutes'}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListEntry",
        props: {
            line: Object
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