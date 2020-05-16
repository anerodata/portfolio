<template>
  <div class="container">
    <div class="header-container">
      <Header/>
      <Treemap :data="treemapData"/>
    </div>
    <div class="filter-router-container">
      <FilterBtn :orgs="orgs" :selectedOrg="selectedOrg" @filter-org="filterOrg"/>
      <p v-show="this.selectedOrg !== 'all'" class="user-msg responsive">
        Pulsa sobre <span :class="selectedOrg.replace(/ /g, '-')" >{{ this.selectedOrg }}</span> de nuevo para volver a mostrar el resto de trabajos
      </p>
      <router-link to="/about" class="router-link desktop">
        About
      </router-link>
    </div>
    <p v-show="this.selectedOrg !== 'all'" class="user-msg desktop">
      Pulsa sobre <span :class="selectedOrg.replace(/ /g, '-')" >{{ this.selectedOrg }}</span> de nuevo para volver a mostrar el resto de trabajos
    </p>
    <Items 
      :items="items"
      :orgs="orgs"
      :noSelectedOrgs="noSelectedOrgs"
      :selectedOrg="selectedOrg"/>
  </div>
</template>

<script>
import data from './../data/data.json'
import Header from './../components/Header.vue'
import Treemap from './../components/Treemap.vue'
import FilterBtn from './../components/FilterBtn.vue'
import Items from './../components/Items.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Treemap,
    FilterBtn,
    Items
  },
  data() {
    return {
      orgs: [
          {
            name: 'El Confidencial'
          },
    
          {
            name: 'Civio'
          },

          {
            name: 'Otros'
          }
        ],
      noSelectedOrgs: [],
      selectedOrg: 'all'
    }
  },
  methods: {
    filterOrg(orgValue) {
      this.selectedOrg = orgValue
      this.noSelectedOrgs = []
      this.orgs.forEach(org => {
        if(org.name !== orgValue) {
          this.noSelectedOrgs.push(org.name)
        }
      })
      this.selectedOrg = orgValue
    },

    sortArr(arr, prop) {
      return arr.sort((a, b) => {
        if(a[prop] < b[prop]) {
          return 1
        } else {
          return -1
        }
      })
    }
  },
  computed: {
    items() {
      return data
    },

    treemapData() {
      const res = this.items.reduce((acc, obj) => {
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
              acc.children.push({name: keyTec, children: []})
          }

          // Get children tec array
          const keyList = acc.children.filter(allChild => allChild.name === keyTec)[0]

          // If children tec array doesn't have and object with lib name...
          if(!keyList.children.some(tecChild => tecChild.name === keyLib)) {
            //... create it
            keyList.children.push({name: keyLib, value: 1})
          } else {
            // Otherwise, add 1 to value property of the array
            const tecList = keyList.children.filter(tecChild => tecChild.name === keyLib)[0]
            tecList.value += 1
          }
          
        })
        return acc
      }, { name: 'all', children: [] })

      res.children = this.sortArr(res.children, 'children')
      res.children.forEach(child => { this.sortArr(child.children, 'value') })
      return res
    }
  }
}
</script>
<style scoped>
  .filter-router-container {
    display: flex;
    justify-content: space-between;
    margin: 15px 22px 7px 22px;
  }

  .user-msg {
    max-width: 700px;
    margin: 15px 0 5px 22px;
    font-size: 0.9em;
  }

  .user-msg.responsive {
    display: none;
  }

  span.Otros {
    color: rgb(255, 216, 102);
  }

  span.Civio {
    color: rgb(169, 220, 118);
  }

  span.El-Confidencial {
    color: rgb(120, 220, 232);
  }

  @media only screen and (max-width: 1000px) {
    .filter-router-container {
      display: block;
    }

    .filter-router-container .router-link {
      width: 100%;
      display: block;
      text-align: center;
      margin-top: 12px;
    }

    .user-msg.responsive {
      display: block;
    }

    .user-msg.desktop {
      display: none;
    }
  }
</style>