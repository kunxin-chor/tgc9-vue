<template>
  <div id="app">
      <MessageBox message="Danger danger will Robinson" bgcolor="green"></MessageBox>
      <MessageBox message="The cow jumps over the moon" v-bind:bgcolor="preferedColor"></MessageBox>
      <h1>{{text}}</h1>
      <button v-on:click="buttonPressed">Click</button>
      <input type="text" v-model='preferedColor'/>
      <Light/>
  </div>
</template>

<script>

import MessageBox from "./components/MessageBox"
import Light from "./components/Light"

export default {
  name: 'App',
  components: {
      MessageBox, Light
  },
  data: function() {
      return {
          'text':'',
          'preferedColor':'azure'
      }
  },
  methods: {
      'buttonPressed':function(){
          this.text = "You clicked me!"
      }
  }
}
</script>

<style>

</style>
