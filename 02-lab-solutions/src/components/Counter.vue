<template>
  <div class="container">
    <div class="counter">
      <div>
        {{ number }}
      </div>
      <span v-if="number%2==0" style="margin-left:10px;">Even</span>
      <span v-else style="margin-left:10px">Odd</span>
    </div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      number: 0,
    };
  },
  methods: {
      'increment':function(){
          this.number++; // this.number = this.number + 1
      },
      'decrement': function() {
          this.number--;
      }
  }
};
</script>

<style scoped>
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border: 1px solid black;
  font-size: 32px;
}
</style>