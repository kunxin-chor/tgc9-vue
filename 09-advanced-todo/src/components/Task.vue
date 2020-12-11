<template>
     <div class="card task" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{task.name}}</h5>
        <div class="card-text">
            <ul>
                <li>Urgency: {{task.urgency}}</li>
                <li>Date Due: {{task.date_due}}</li>
                <li>Done: {{task.done}}</li>
            </ul>
        </div>
        <a href="#" class="btn btn-danger" @click="deleteTask">Delete</a>
      </div>
    </div> 
</template>

<script>
export default {
    props:['task'],
    methods:{
        deleteTask:function() {
            this.$emit('delete_task', this.task.id);
        }
    }
}
</script>

<style scoped>

</style>