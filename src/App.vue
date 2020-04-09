<template>
  <div id="app">
    <div class="container">
      <Dataviz/>
      <Items/>
      <Pagination/>
    </div>
  </div>
</template>

<script>
import Dataviz from './components/Dataviz.vue'
import Items from './components/Items.vue'
import Pagination from './components/Pagination.vue'
export default {
  name: 'App',
  components: {
    Dataviz,
    Items,
    Pagination
  }
}
</script>

<style>

</style>
