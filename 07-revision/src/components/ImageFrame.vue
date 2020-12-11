<template>
    <div class="image" v-bind:style='{
        "borderColor":borderColor, 
        "backgroundColor": backgroundColor 
        }'>
        <img v-bind:src="imageSource"/>
    </div>
</template>

<script>
export default {
    props:['imageSource', 'borderColor', 'backgroundColor']
}
</script>

<style scoped>
    .image {
        border:1px solid black;
        padding: 25px;
    }
</style>