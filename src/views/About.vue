<template>
	<div id="about">
    <div class="header_container">
      <Header :treemapData="treemapData"/>
    </div>
    <div>
      <p style="color: white;">My about</p>
    </div>
  </div>
</template>

<script>
import Header from './../components/Header.vue'
export default {
  name: 'About',
  components: {
    Header
  },
}
</script>

<style>
	
</style>