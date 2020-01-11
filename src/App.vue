<template>
    <div id="app">
        <Oefferl/>
    </div>
</template>

<script>
    import Oefferl from './components/Oefferl.vue'

    export default {
        name: 'app',
        components: {
            Oefferl
        }
    }
</script>

<style>
    @import './assets/style.css';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
