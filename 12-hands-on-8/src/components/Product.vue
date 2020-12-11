<template>
  <div class="media">
      <img class="mr-3" v-bind:src="product.image_url" alt="Generic placeholder image">
    <div class="media-body">
      <h5 class="mt-0">{{product.name}}</h5>
        <ul>
            <li>Price:{{product.price}}</li>
            <li>Type:{{product.type}}</li>
            <li>Tags:{{product.characteristics}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:['product']
};
</script>

<style scoped></style>
