<template>
    <div>
        <div>
            <label>Name:</label>
            <input type="text" v-model="name"/>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" v-model="email"/>
        </div>
        <button @click="submit">Submit</button>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            name:"",
            email:"",
        }
    },
    methods:{
        submit:function(){
            this.$emit('onSubmit', {
                "name": this.name,
                "email": this.email
            })
        }
    }
}
</script>