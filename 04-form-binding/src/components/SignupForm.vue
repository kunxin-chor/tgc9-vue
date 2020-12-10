<template>
    <div>
        <div>
            <label>User Name</label>
            <input type="text" v-model="username"/>
        </div>
        <div>
            <label>Password</label>
            <input type="text" v-model="password"/>
        </div>
        <p>Is username OK? {{usernameOK}}</p>
        <p>Is password OK? {{passwordOK}}</p>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            'username':'',
            'password':''
        }
    },
    computed:{
        'usernameOK':function(){
            if (this.username.length >= 7) {
                return true;
            } else {
                return false;
            }
        },
        'passwordOK':function(){
            let specialCharacters = "~!@#$%^*().";
            for (let c of specialCharacters) {
                if (this.password.includes(c)) {
                    return true;
                }
            }
            return false;

        }
    }
}
</script>

<style scoped>

</style>