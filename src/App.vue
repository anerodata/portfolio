<template>
  <div id="app">
    <Header :treemapData="treemapData"/>
    <router-view/>
  </div>
</template>
<script>
import data from './data/data.json'
import Header from './components/Header.vue'
export default {
  name: 'About',
  components: {
    Header
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

<style>

  html, body {
    background-image: linear-gradient(to bottom right, #383838, #272822);
    background-repeat: no-repeat;
  }

  #app, .container {
    max-width: 1200px;
    margin: auto;
  }

  .header_container {
    margin: 0 18px;
  }

  .treemap_container .child {
    opacity: 0.7;
  }

  .child.js, .labels .js {
    fill: #ff6188;
  }

  span.js {
    opacity: 0.8;
  }

  span.js, #tooltip.js {
    color: #ff6188;
    border: 1px solid #ff6188;
  }

  .child.py, .labels .py{
    fill: #ab9df2;
  }

  span.py {
    opacity: 0.8;
  }

  span.py, #tooltip.py {
    color: #ab9df2;
    border: 1px solid #ab9df2;
  }

  .child.Otras, .labels .Otras{
    fill: #fc9867;
  }

  span.Otras {
    opacity: 0.8;
  }

  span.Otras, #tooltip.Otras {
    color: #fc9867;
    border: 1px solid #fc9867;
  }

  rect, .item_package {
    opacity: 0.8;
  }

  #filter_btn {
    display: flex;
    margin-left: 7px;
    background: #272822;
    padding: 7px;
    border-radius: 9px;
    width: 92%;
    border: 1px solid;
  }
  
</style>
