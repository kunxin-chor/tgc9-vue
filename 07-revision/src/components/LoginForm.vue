<template>
    <div>
        <!-- binding is connecting an attribute or props to a data variable -->
        <!-- whenever the template see a variable, it will search in 4 places
          1. data
          2. props
          3. methods
          4. computed
        -->

        <!-- binding to a placeholder in the template -->
        <p>{{instructions}}</p>

        <!-- bind to an attribute or props -->

        <!-- v-model is two-way binding -->
        <input type="text" placeholder="username" v-model='username'/>
        <input type="text" placeholder="password" v-model='password'/>
        <button v-on:click='loginPressed'>Login</button>

    </div>
</template>

<script>
export default {
    // data is private content (aka variables)
    // of the component. It cannot be accessed by others
    data:function(){
        return {
            'username':'',
            'password':''
        }
    },
    methods:{
        loginPressed:function() {
            this.$emit('user_login', {
                'username':this.username,
                'password':this.password
            })
        }
    }
}
</script>

<style scoped>

</style>