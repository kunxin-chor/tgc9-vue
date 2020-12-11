<template>
  <div class="todolist">
    <!-- for each task t in the tasks array, render one Task component -->
    <Task v-for="t in tasks" :task="t" :key="t.id" @delete_task="processDeleteTask" @task_updated="processUpdateTask"/>

    <div>
        <div>
            <label class='form-label'>Task Name</label>
            <input type="text" class='form-control' v-model='newTaskName'/>
        </div>
        <div>
            <label class='form-label'>Urgency</label>
            <select v-model="newTaskUrgency" class="form-control">
                <option value="low">Low</option>
                <option value="average">Average</option>
                <option value="important">Important</option>
            </select>
        </div>
      
        <div>
             <label class='form-label'>Date Due</label>
            <input type="date" class='form-control' v-model='newTaskDateDue'/>
        </div>
        <button @click="addTask">Add Task</button>
    </div>
  </div>
</template>

<script>
import Task from "./Task";
export default {
  components: {
    Task
  },
  data: function() {
    return {
      newTaskName:"",
      newTaskUrgency:'low',
      newTaskDateDue: new Date(),  
      tasks: [
        {
          id: 1,
          name: "Wash the car",
          urgency: "important",
          date_due: "2020-12-31",
          done: false
        },
        {
          id: 2,
          name: "Pay the bills",
          urgency: "important",
          date_due: "2020-12-30",
          done: false
        },
        {
          id: 3,
          name: "Buy grocery",
          urgency: "average",
          date_due: "2020-12-29",
          done: false
        }
      ]
    };
  },
  methods:{
      addTask:function() {
          let newTask = {
              'id': Math.floor(Math.random() * 10000 + 9999),
              'name': this.newTaskName,
              'urgency': this.newTaskUrgency,
              'date_due': this.newTaskDateDue,
              'done': false
          };
          this.tasks.push(newTask);
      },
      processDeleteTask:function(taskIdToDelete) {
          // index of the task in the tasks array that I want to delete
          let indexToDelete = this.tasks.findIndex(function(t){
              return t.id == taskIdToDelete;
          });
          this.tasks.splice(indexToDelete, 1);
      },
      processUpdateTask:function(newTaskInfo) {
          // find the index of the task within the tasks array that we want to update
          let indexToUpdate = this.tasks.findIndex(function(t){
              return t.id == newTaskInfo.id
          })
          // e.q.v this.tasks[indexToUpdate] = new TaskInfo
          // but we must this.$set or else Vue cannot detect the changes in the array
          this.$set(this.tasks, indexToUpdate, newTaskInfo);
      }
  }
};
</script>

<style scoped>
.todolist {
  display: flex;
  flex-wrap: wrap;
}

.task {
  margin: 10px;
}
</style>
