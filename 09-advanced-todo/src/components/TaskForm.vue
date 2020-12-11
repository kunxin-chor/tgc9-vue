<template>
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
        <input type="checkbox" v-model="newTaskDone" />
      </div>
    </div>
    <div>
      <label class="form-label">Date Due</label>
      <input type="date" class="form-control" v-model="newTaskDateDue" />
    </div>
    <button @click="updateTask" class="mt-3">Update</button>
  </div>
</template>

<script>
export default {
    props:['initialTask'],
    data:function(){
        return {
            'newTaskName': this.initialTask ? this.initialTask.name : '',
            'newTaskUrgency': this.initialTask ? this.initialTask.urgency : 'low',
            'newTaskDone': this.initialTask ? this.initialTask.done : false,
            'newTaskDateDue': this.initialTask ? this.initialTask.date_due : new Date()
        }
    },
    methods:{
        updateTask:function() {
            this.$emit('task_submitted',{
                'name': this.newTaskName, 
                'urgency':this.newTaskUrgency,
                'done': this.newTaskDone,
                'date_due': this.newTaskDateDue
            })
        }
    }
}
</script>