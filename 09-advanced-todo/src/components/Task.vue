<template>
  <div>
    <div class="card task" style="width: 18rem">
      <div class="card-body" v-if="isEditing == false">
        <h5 class="card-title">{{ task.name }}</h5>
        <div class="card-text">
          <ul>
            <li>Urgency: {{ task.urgency }}</li>
            <li>Date Due: {{ task.date_due }}</li>
            <li>Done: {{ task.done }}</li>
          </ul>
        </div>
        <a href="#" class="btn btn-primary" @click="editTask">Edit</a>
        <a href="#" class="btn btn-danger" @click="deleteTask">Delete</a>
      </div>
      <div class="card-body" v-else>
        <h2>Upate an existing task</h2>
        <TaskForm v-bind:initialTask="task" v-on:task_submitted="updateTask"/>
      </div>
  </div>
  </div>
</template>

<script>
import TaskForm from "./TaskForm";
export default {
  components: {
    TaskForm,
  },
  data: function () {
    return {
      isEditing: false,
      newTaskName: this.task.name,
      newTaskUrgency: this.task.urgency,
      newTaskDateDue: this.task.date_due,
      newTaskDone: this.task.done,
    };
  },
  props: ["task"],
  methods: {
    deleteTask: function () {
      this.$emit("delete_task", this.task.id);
    },
    editTask: function () {
      this.isEditing = true;
    },
    updateTask: function (newTaskInfo) {
      this.isEditing = false;
      this.$emit("task_updated", {
        id: this.task.id,
        name: newTaskInfo.name,
        urgency: newTaskInfo.urgency,
        date_due: newTaskInfo.done,
        done: newTaskInfo.date_due,
      });
    },
  },
};
</script>

<style scoped>
</style>