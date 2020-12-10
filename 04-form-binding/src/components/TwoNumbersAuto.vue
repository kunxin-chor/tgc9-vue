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
    <div>
        Result: <span>{{results}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props:[],
    data:function() {
        return {
            'num1':0,
            'num2':0,
        }
    },
    methods:{

    },
    computed:{
        results:function(){
            return parseInt(this.num1) + parseInt(this.num2);
        }
    }
};
</script>

<style scoped></style>
