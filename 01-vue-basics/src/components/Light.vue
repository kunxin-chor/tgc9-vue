<template>
    <div>
        <div v-if="switchStatus == true">
            Lights On
        </div>
        <div v-else>
            Lights is off
        </div>
        <button v-on:click="toggleLight">Toggle</button>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            'switchStatus': false
        }
    },
    props:[],
    methods:{
        'toggleLight':function(){

            // this.switchStatus =  !this.switchStatus;
            if (this.switchStatus == true) {
                this.switchStatus = false;
            } else {
                this.switchStatus = true;
            }
        }
    }
}
</script>

<style scoped>

</style>