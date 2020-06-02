<template>
    <div v-if="line.countdowns.length !== 0">
        <div class="d-flex justify-content-between">
            <div class="d-flex w-33 justify-content-center align-items-center">
                <Icon :name=line.name :type=line.type />
            </div>
            <div class="d-flex w-33">
            </div>
            <div class="d-flex w-33 justify-content-center align-items-center">
                <div class="d-flex flex-column m-10px mt-20px">
                    <div class="text-align-right" v-for="countdown in line.countdowns" v-bind:key="countdown">
                        {{countdown}} {{countdown === 1 ? 'Minute' : 'Minutes'}}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="m-10px">
                {{line.towards}}
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from "./Icon";
    export default {
        name: "ListEntry",
        components: {Icon},
        props: {
            line: Object
        }
    }
</script>

<style scoped>

</style>
