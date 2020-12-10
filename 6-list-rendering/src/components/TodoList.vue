<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li v-for="(t, index) in tasks" v-bind:key="index">
          {{ t }}
        <button @click="deleteTask(t)">x</button>
        <button @click="editTask(index)">Edit</button>
      </li>
    </ul>
     <h1>Add a new task</h1>
  <input type="text" v-model="newTaskName" />
  <button @click="addTask">Add</button>
  </div>
 
</template>

<script>
export default {
  data: function() {
    return {
      tasks: ["Wash the floor", "Pay the Bills", "Clean the room"],
      newTaskName:''
    };
  },
  methods:{
      addTask:function(){
          this.tasks.push(this.newTaskName)
          this.newTaskName = "";
      },
      deleteTask:function(task) {
          let indexToDelete = this.tasks.indexOf(task);
          this.tasks.splice(indexToDelete, 1);
      },
      editTask:function(index) {
          let newTaskName = prompt("New task name:");
          // important: the below code will not work
          //this.task[index] = newTaskName;
          // special code from vue for changing an index in an array directly
          this.$set(this.tasks, index, newTaskName);
      }
  }
};
</script>

<style scoped>
</style>
