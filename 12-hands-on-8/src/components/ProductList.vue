<template>
<div class="container">
    <Product v-for='p in products' v-bind:key='p.id' v-bind:product='p'/>
</div>
</template>

<script>
import Product from './Product'
export default {
  components:{
      Product
  },
  data: function() {
    return {
      products: [
        {
          id: 1,
          price: 12,
          name: "ACME Screwdriver",
          type: "physical",
          characteristics: ["discount", "hazard"],
          image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQG2rlO8-PTxZin3RSrNjAIcDjEvau8VaaM31jk79NOsUlWftcGTmJnlwCk3JjySUqttxv0Xk&usqp=CAc'
        },
        {
          id: 2,
          price:15,
          name: "Ebook on how to get rich",
          type: "digital",
          characteristics: ["download"],
          image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj2pyBnn2VZtUVn75pPKg-VhOEgKmeKw28T4oJS7cNLH_Nnxm8D2jO0QWY8bisYUNM9DYygM&usqp=CAc"
        },
        {
          id: 3,
          name: "ACME Chainsaw",
          type: "physical",
          price:18,
          characteristics: ["hazard", "limited", "fragile"],
          image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAnbbV-nsSJpTarAf5KfWa2b_K7uxM79V-_hjwvVuoqSpcM84FjNYwyQnwztOvvQc6hHYzvk&usqp=CAc"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
