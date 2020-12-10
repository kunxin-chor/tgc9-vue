<template>
    <div>
        <h1>DataForm</h1>
        <input type="text" placeholder="First Name?" v-model="firstName"/>
        <input type="text" placeholder="Last Name?" v-model="lastName"/>
        <button v-on:click="submit">Submit</button>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            'firstName': '',
            'lastName': ''
        }
    },
    methods:{
        submit:function(){
            this.$emit('info_submitted', {
                'firstName': this.firstName,
                'lastName': this.lastName
            })
        }
    }
}
</script>