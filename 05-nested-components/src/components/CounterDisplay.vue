<template>
    <div class="counter" @click="reset">
        {{number}}
    </div>
</template>

<script>
export default {
    props:['number'],
    methods:{
        reset:function(){
            this.$emit('reset_to_zero');
        }
    }
}
</script>

<style scoped>
.counter {
    width: 250px;
    height: 250px;
    text-align:center;
    border:1px black solid;
}
</style>