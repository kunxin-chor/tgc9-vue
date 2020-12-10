<template>
    <div>
        <h1>Display</h1>
        <div>First Name: {{firstName}}</div>
        <div>Last Name: {{lastName}}</div>
    </div>
</template>

<script>
export default {
    props:['firstName', 'lastName']
}
</script>