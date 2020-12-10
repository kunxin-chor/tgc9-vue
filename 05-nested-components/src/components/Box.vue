<template>
    <div class='box' v-bind:style='{backgroundColor: bgColor}'>
        {{content}}
        <button @click="resetPressed">Reset</button>
    </div>
</template>

<script>
export default {
    props:['bgColor', 'content'],
    methods:{
        resetPressed:function(){
            // $emit to send out an event to parent
            // the argument is the name of the event -- we name it whatever we want
            this.$emit('reset_backgroundcolor');
        }
    }
}
</script>

<style scoped>
.box {
    border: 1px solid black;
    width:150px;
    height:150px;
}
</style>