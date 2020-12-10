<template>
    <div>
        <div>
            <CounterDisplay v-bind:number="number1" v-on:reset_to_zero='resetNumber1'/>
            <button @click="incrementNumber1">+</button>
            <button @click="decrementNumber1">-</button>
        </div>
        <div>
            <CounterDisplay v-bind:number="number2" v-on:reset_to_zero='resetNumber2'/>
            <button @click="incrementNumber2">+</button>
            <button @click="decrementNumber2">-</button>
        </div>
    </div>
</template>

<script>
import CounterDisplay from "./CounterDisplay";
export default {
    components:{
        CounterDisplay
    }, 
    data: function(){
        return {
            'number1':1771,
            'number2':333
        }
    },
    methods:{
        incrementNumber1:function(){
            this.number1 += 1
        },
        decrementNumber1:function() {
            this.number1 -=1;
        },
        incrementNumber2:function(){
            this.number2 += 1;
        },
        decrementNumber2:function(){
            this.number2 -=1;
        },
        resetNumber1:function() {
            this.number1 =0;
        },
        resetNumber2:function(){
            this.number2 = -1;
        }
    }
}
</script>


<style scoped>

</style>