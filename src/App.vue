<template>
  <div id="app">
    <div class="container">
      <Header :title="title" :subtitle="subtitle"/>
      <Dataviz/>
      <Items :items="items"/>
      <Pagination/>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
      title: '<Antonio Hernández/>',
      subtitle: '<Periodismo de datos y desarrollo web/>'
    }
  },
  created() {
    this.fetchItems()
  },
  methods: {
    ...mapActions(['fetchItems'])
  },
  computed: mapGetters(['items'])
}
</script>

<style>

  body {
    background-image: linear-gradient(to bottom right, #383838, #272822);
    background-repeat: no-repeat;
  }

  .container {
    max-width: 1200px;
    margin: auto;
  }
  
</style>
