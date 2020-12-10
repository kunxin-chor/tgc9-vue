<template>
<div>
    <DataForm v-on:info_submitted='processInfo'/>
    <Display v-bind:firstName="firstName" v-bind:lastName="lastName"/>
</div>
</template>

<script>
import DataForm from './DataForm';
import Display from './Display';

export default {
    components:{
        DataForm, Display
    },
    data: function() { return {
        firstName:'',
        lastName:""
    }},
    methods:{
        processInfo:function(data) {
            console.log(data);
            this.firstName = data.firstName;
            this.lastName = data.lastName;
        }
    }
}
</script>