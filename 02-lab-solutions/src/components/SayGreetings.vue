<template>
<div>
    <h1>{{message}}</h1>
    <button @click="sayHelloWorld">Say Hi</button>
    <button @click="sayGoodbye">Say Goodbye</button>
    <button @click="gotoSleep">Sleep</button>
</div>
</template>


<script>
export default {
    data: function(){
        return {
            'message':''
        }
    },
    methods:{
        "sayHelloWorld":function(){
            this.message = "Hello world"
        },
        "sayGoodbye":function() {
            this.message = "Goodbye world"
        },
        "gotoSleep": function() {
            this.message = "zz...zz..zz"
        }
    }
}
</script>


<style>
</style>