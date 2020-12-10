<template>
  <div>
    <div>
      <label>Number 1</label>
      <input type="text" v-model="num1" />
    </div>
    <div>
      <label>Number 2</label>
      <input type="text" v-model="num2" />
    </div>
    <button @click="doCalculate">Calculate</button>
    <div>
        Result: <span>{{result}}</span>
    </div>
  </div>
</template>

<script>
export default {
    data:function() {
        return {
            'num1':0,
            'num2':0,
            'result':0
        }
    },
    methods:{
        doCalculate:function(){
            this.result = parseInt(this.num1) + parseInt(this.num2);
        }
    }
};
</script>

<style scoped></style>
