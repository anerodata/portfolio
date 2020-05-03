<template>
  <div id="app">
    <div class="container">
      <Header 
        :title="title" 
        :subtitle="subtitle" 
        :treemapData="treemapData"
      />
      <Items :items="items"/>
    </div>
  </div>
</template>

<script>
import data from './data/data.json';
import Header from './components/Header.vue'
import Items from './components/Items.vue'
export default {
  name: 'App',
  components: {
    Header, 
    Items
  },
  data() {
    return {
      title: '<Antonio Hernández/>',
      subtitle: '<Periodismo de datos y desarrollo web/>'
    }
  },
  methods: {
    sortArr(arr, prop) {
      return arr.sort((a, b) => {
        if(a[prop] < b[prop]) {
          return 1
        } else {
          return -1
        }
      })
    }, 
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

<style>

  html, body {
    background-image: linear-gradient(to bottom right, #383838, #272822);
    background-repeat: no-repeat;
  }

  .container {
    max-width: 1200px;
    margin: auto;
  }

  .header_container, .filter_container {
    margin-left: 12px;
  }
  
</style>
