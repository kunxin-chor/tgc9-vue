<template>
  <div id="app" class="container">
      <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
      TodoList
  }
}
</script>

<style>
#app {

}
</style>
