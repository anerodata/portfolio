<template>
  <div class="container">
    <div class="header-container">
      <Header/>
      <Treemap :data="treemapData"/>
    </div>
    <section class="router-container">
      <FilterBtn :orgs="orgs" :filter="filter"/>
      <router-link to="/about" class="router-link desktop">
        About
      </router-link>
    </section>
    <Items :items="items" :filter="filter"/>
  </div>
</template>

<script>
import Header from './../components/Header.vue'
import Treemap from './../components/Treemap.vue'
import FilterBtn from './../components/FilterBtn.vue'
import Items from './../components/Items.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    Header,
    Treemap,
    FilterBtn,
    Items
  },
  computed: {
    ...mapGetters(['items', 'treemapData', 'orgs', 'filter'])
  }
}
</script>
<style scoped>
  .router-container {
    display: flex;
    justify-content: space-between;
    margin: 15px 22px 7px 22px;
  }

  @media only screen and (max-width: 1000px) {
    .router-container {
      display: block;
      margin: 15px 2px 7px 2px;
    }

    .router-container .router-link {
      width: 100%;
      display: block;
      text-align: center;
      margin-top: 12px;
    }
  }
</style>