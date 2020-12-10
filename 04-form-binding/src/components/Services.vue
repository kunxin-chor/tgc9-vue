<template>
    <div>
        <label>Select your services</label>
        <div>
            <input type="checkbox" name="services" v-model="services" value="song"/>
            <label>Birthday Song ($3.00)</label>
        </div>
        <div>
            <input type="checkbox" name="services" v-model="services" value="cake"/>
            <label>Birthday Cake ($20.00)</label>
        </div>
        <div>
            <input type="checkbox" name="services" v-model="services" value="mascot"/>
            <label>Animal Mascot ($30.00)</label>
        </div>
        <div>
            <input type="checkbox" name="services" v-model="services" value="gift"/>
            <label>Door Gift ($5)</label>
        </div>
        <h2>Total:{{totalCost}}</h2>
    </div>
</template>

<script>
export default {    
    data:function(){
        return {
            services:[]
        }
    },
     computed:{
      totalCost:function() {
          let total = 0;
          if (this.services.includes('song')) {
              total += 3;
          } 
          
          if (this.services.includes('cake')) {
              total += 20;
          }

          if (this.services.includes('mascot')) {
              total += 30;
          }

          if (this.services.includes('gift')) {
              total += 5;
          }

        return total;
      },
      totalCostEx:function() {
          let costTable = {
              'song':3,
              'cake':20,
              'mascot':30,
              'gift': 5
          }

          let total = 0;
          for (let selectedService of this.services) {
            total = total + costTable[selectedService];
          }
          return total;
      }
  }
}
</script>

<style scoped>

</style>