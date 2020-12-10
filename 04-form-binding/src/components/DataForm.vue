<template>
    <div>
        <div>
            <label>First name</label>
            <input type="text" v-model="firstName"/>
            <span>{{firstNameErrors}}</span>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" v-model="lastName"/>
        </div>
        <div>
            <label>Gender</label>
            <input type="radio" name="gender" value="male" v-model="gender"><label>Male</label>
            <input type="radio" name="gender" value="female" v-model="gender"><label>Female</label>
        </div>
        <div>
            <label>Occupation</label>
            <input type="radio" name="occupation" value="student" v-model="occupation"><label>Student</label>
            <input type="radio" name="occupation" value="full-time" v-model="occupation"><label>Full Time</label>
            <input type="radio" name="occupation" value="part-time" v-model="occupation"><label>Part Time</label>
        </div>
        <div>
            <label>Interests:</label>
            <input type="checkbox" name="interests" value="reading" v-model="interests"><label>Reading</label>
            <input type="checkbox" name="interests" value="cycling" v-model="interests"><label>Cycling</label>
            <input type="checkbox" name="interests" value="stamp-collecting" v-model="interests"><label>Stamp Collecting</label>
        </div>
        <div>
            <label>How do you spend your free time?</label>
            <input type='checkbox' name="freetime" value="hangout" v-model="freetime"><label>Hang out with friends</label>
            <input type='checkbox' name="freetime" value="cafe-hoping" v-model="freetime"><label>Cafe hoping</label>
            <input type='checkbox' name="freetime" value="drinking" v-model="freetime"><label>Drinking</label>
        </div> 
        <div>
            <label>How did you hear about us?</label>
            <select v-model='hearAbout'>
                <option value="">------</option>
                <option value="social-media">Social Media</option>
                <option value="email">Email</option>
                <option value="friends">Friends or word of mouth</option>
            </select>
        </div>
        <div>
            <label>Countries:</label>
            <select v-model='country'>
                <option value="sg">Singapore</option>
                <option value="ma">Malaysia</option>
                <option value="in">Indonesia</option>
                <option value="th">Thailand</option>
            </select>
        </div>

        <h2>Your particulars</h2>
        <ul>
            <li>First name: {{firstName}}</li>
            <li>Gender: {{gender}}</li>
            <li>Interests: {{interests}}</li>
            <li>Last Name: {{lastName}}</li>
            <li>Occupation: {{occupation}}</li>
            <li>Leisure activities: {{freetime}}</li>   
            <li>How did you hear about us: {{hearAbout}}</li>
            <li>Country:{{country}}</li>
        </ul>
       
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            firstName:"",
            gender:"male",
            interests:[],
            lastName:'',
            occupation:'',
            freetime:[],
            hearAbout:'',
            country:''
        }
    },
    computed:{
        'firstNameErrors':function(){
            if (this.firstName.length < 3) {
                return "First name must be at least three characters"
            } else {
                return "";
            }
        }
    }
}
</script>

<style scoped>

</style>