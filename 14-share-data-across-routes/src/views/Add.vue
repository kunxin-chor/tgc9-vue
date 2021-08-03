<template>
    <div>
        <h1>Add Customer</h1>
        <CustomerForm v-on:onSubmit="processForm"/>
    </div>
</template>

<script>
import CustomerForm from "@/components/CustomerForm"
export default {
    name:'Add',
    components: {
        CustomerForm
    },
    methods:{
        processForm:function(data) {
            this.$store.commit("addNewCustomer", data);
        }
    }
}
</script>