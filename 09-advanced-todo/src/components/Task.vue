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
        <div>
          <div>
            <label class="form-label">Task Name</label>
            <input type="text" class="form-control" v-model="newTaskName" />
          </div>
          <div>
            <label class="form-label">Urgency</label>
            <select v-model="newTaskUrgency" class="form-control">
              <option value="low">Low</option>
              <option value="average">Average</option>
              <option value="important">Important</option>
            </select>
          </div>
        <div>
            <label class="form-label">Done</label>
            <div class="form-check-input">
                <input type="checkbox" v-model='newTaskDone'/>
            </div>
        </div>
          <div>
            <label class="form-label">Date Due</label>
            <input type="date" class="form-control" v-model="newTaskDateDue" />
          </div>
          <button @click="updateTask" class="mt-3">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isEditing: false,
      newTaskName:this.task.name,
      newTaskUrgency:this.task.urgency,
      newTaskDateDue:this.task.date_due,
      newTaskDone:this.task.done
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
    updateTask:function() {
        this.isEditing = false;
        this.$emit('task_updated', {
            'id': this.task.id,
            'name': this.newTaskName,
            'urgency': this.newTaskUrgency,
            'date_due': this.newTaskDateDue,
            'done': this.newTaskDone
        })
    }
  },
};
</script>

<style scoped>
</style>