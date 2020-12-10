<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>The weather is {{weather}} today</h2>
    <img :src="url"/>
    <button @click="buttonClicked">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
      return {
          "weather":"Sunny",
          "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Catedral_II.jpg/1280px-Catedral_II.jpg"
      }
  },
  methods:{
      'buttonClicked': function() {
          alert("I have been clicked!")
          this.msg = "I have been clicked"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
