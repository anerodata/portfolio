<template>
  <div>
    <select></select>
    <Columns/>
    <Circles/>
  </div>
</template>

<script>
import Columns from './Columns.vue'
import Circles from './Circles.vue'

export default {
  name: 'Dataviz',
  components: {
    Columns,
    Circles
  },
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
