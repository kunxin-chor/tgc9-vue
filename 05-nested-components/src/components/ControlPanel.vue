<template>
  <div>
    <div class="row">
      <Box v-bind:bgColor="box1color" content="1"
             v-on:reset_backgroundcolor='resetBox1' />
      <Box v-bind:bgColor="box2color" content="2"
           v-on:reset_backgroundcolor ='resetBox2' />
    </div>
    <div>
      <label>Box 1</label>
      <select v-model="box1color">
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
    <div>
      <label>Box 2</label>
      <select v-model="box2color">
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  </div>
</template>

<script>
import Box from "./Box";

export default {
  components: {
    Box
  },
  data: function() {
    return {
      box1color: "",
      box2color: ""
    };
  },
  methods:{
      resetBox1:function(){
          this.box1color='white';
      },
      resetBox2:function(){
          this.box2color="white"
      }
  }
};
</script>

<style scoped>
.row {
  display: flex;
}
</style>
