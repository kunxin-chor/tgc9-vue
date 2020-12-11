<template>
  <div id="app">
      <LoginForm v-on:user_login="processLogin"/>
      <ImageFrame v-bind:borderColor="firstFrameColor" imageSource="https://images.theconversation.com/files/319652/original/file-20200310-61148-vllmgm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"/>
      <ImageFrame borderColor="green" backgroundColor="purple" imageSource="https://ei.marketwatch.com/Multimedia/2020/04/22/Photos/ZG/MW-IF004_catcov_20200422170225_ZG.jpg?uuid=9165615a-84dc-11ea-96a1-9c8e992d421e"/>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'
import ImageFrame from './components/ImageFrame'

export default {
  name: 'App',
  components: {
      LoginForm,
      ImageFrame
  },
  data:function(){
      return {
          firstFrameColor: 'orange'
      }
  },
  methods:{
      processLogin:function(user){
          alert("User " + user.username + " has logged in")
      }
  }
}
</script>

<style>
#app {

}
</style>
