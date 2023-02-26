<template>
  <div class="container">
    <div class="header-container">
      <Header/>
      <Treemap :data="treemapData" @filterByLibrary="filterByLibrary"/>
    </div>
    <section class="router-container">
      <FilterBtn :orgs="orgs" :filter="filterByOrgValue" @filterItems="filterItemsByOrg"/>
      <router-link to="/about" class="router-link desktop">
        About
      </router-link>
    </section>
    <Items :items="filteredItems"/>
  </div>
</template>

<script>
import Header from './../components/Header.vue'
import Treemap from './../components/Treemap.vue'
import FilterBtn from './../components/FilterBtn.vue'
import Items from './../components/Items.vue'
import { mapGetters, mapActions } from 'vuex'
import { ORGS } from './../data/variables.js'
export default {
  name: 'Home',
  components: {
    Header,
    Treemap,
    FilterBtn,
    Items
  },
  data () {
    return {
      orgs: ORGS,
      filterByOrgValue: 'all'
    }
  },
  mounted() {
    this.fetchItems()
  },
  computed: {
    ...mapGetters(['items']),
    treemapData () {
      const treemapData = this.items.reduce((acc, obj) => {
        // Loop in library array
        obj.biblioteca.forEach((bib) => {

          // Get tec (js, py) and lib (Leaflet, bs4)
          const keys = bib.split('.')
          let keyTec = keys[1]
          let keyLib = keys[0]
          if(keys[1] === undefined) {
            keyTec = 'Otras'
          }
          // If global children array doesn't have and object with tec name...
          if(!acc.children.some(allChild => allChild.name === keyTec)) {
            //... create it
            acc.children.push({name: keyTec, sum: 0, children: []})
          }

          // Get children tec array
          const keyList = acc.children.filter(allChild => allChild.name === keyTec)[0]

          // If children tec array doesn't have and object with lib name...
          if(!keyList.children.some(tecChild => tecChild.name === keyLib)) {
            //... create it
            keyList.children.push({name: keyLib, value: 1})
            keyList.sum += 1
          } else {
            // Otherwise, add 1 to value property of the array
            const tecList = keyList.children.filter(tecChild => tecChild.name === keyLib)[0]
            tecList.value += 1
            keyList.sum += 1
          }
        })
        return acc
      }, { name: 'all', children: [] })
      treemapData.children = sortArr(treemapData.children, 'sum')
      treemapData.children.forEach(child => { sortArr(child.children, 'value') })
      function sortArr(arr, prop) {
        return arr.sort((a, b) => {
          if(a[prop] < b[prop]) {
            return 1
          } else {
            return -1
          }
        })
      }
      return treemapData
    },
    filteredItems () {
      let filteredItems = []
      if (this.filterByOrgValue === 'all') {
        filteredItems = this.items
      } 
      if (this.filterByOrgValue === 'Otros') {
        return this.items.filter(item => {
          return !this.orgs.find(org => item['organización'] === org)
        })
      }
      if (this.filterByOrgValue !== 'Otros' && this.filterByOrgValue !== 'all') {
        filteredItems = this.items.filter(item => {
          return item['organización'] === this.filterByOrgValue 
        })
      }
      return filteredItems
    }
  },
  methods: {
    ...mapActions(['fetchItems', 'filterItemsBySoftware']),
    filterByLibrary (filterValue) {
      console.log(filterValue)
    },
    filterItemsByOrg (filterValue) {
      console.log(filterValue)
      this.filterByOrgValue = filterValue
    },
    filterItemsByTec (filterValue) {
      this.filterItemsByTecValue = filterValue
    },
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
