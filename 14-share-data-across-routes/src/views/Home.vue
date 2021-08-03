<template>
  <div>
    <h1>All Customers</h1>
    <ul>
      <li v-for="c in $store.getters.customers" v-bind:key="c.id">
      {{c.name}} ({{c.email}})
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>
