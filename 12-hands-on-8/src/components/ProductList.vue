<template>
<div class="container">
    <input type="text" v-model="search_by"/>
    <p>Total cost of selected products = {{totalCost}}</p>
    <Product v-for='p in searchResults' v-bind:key='p.id' v-bind:product='p'/>
</div>
</template>

<script>
import Product from './Product'
import axios from 'axios'

export default {
  created:async function(){
      // if we give Vue a relative URL, Vue will start looking for it in the /public folder
      let response = await axios.get('products.json');
      this.products = response.data;
  },
  components:{
      Product
  },
  data: function() {
    return {
      search_by:'',  
      products:[]
    };
  },
  computed:{
      searchResults:function(){
          let results = this.products.filter((p)=>{
              return p.name.toLowerCase().includes(this.search_by.toLowerCase())
          })
          return results;
      },
      totalCost:function(){
          let reducer = (costSoFar, currentProduct)=>{
              return costSoFar + currentProduct.price;
          }
          let total = this.searchResults.reduce(reducer, 0);
          return total;
      }
  }
};
</script>

<style scoped>
</style>
