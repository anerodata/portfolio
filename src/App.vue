<template>
  <div id="app"> 
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App'
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
    margin-top: 16px;
    width: 100%;
    display: flex;
  }

  #header {
    flex-basis: 40%;
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

  @media only screen and (max-width: 1000px) {
      .header_container {
        display: block;
      }

      #header_title {
        margin-bottom: 16px;
      }
    }
  
</style>
