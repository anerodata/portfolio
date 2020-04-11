<template>
  <div id="app">
    <div class="container">
      <Header :title="title" :subtitle="subtitle"/>
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
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Dataviz,
    Items,
    Pagination,
    Header 
  },
  data() {
    return {
      title: '<Antonio Hernández/ >',
      subtitle: '<Periodismo de datos y desarrollo web/ >'
    }
  }
}
</script>

<style>
  body {
    background-image: linear-gradient(to bottom right, #383838, #272822);
    max-width: 1200px;
    margin: auto;
  }
  
</style>
