<template>
  <div id="app"> 
    <router-view/>
    <footer id="footer">
      Desarrollado por Antonio Hernández con <span class="lib-code">Vue.js</span> y <span class="lib-code">d3.js</span>, siguiendo el esquema de color <a id="monokai-anchor" href="https://monokai.pro/" target="_blank">
        <span style="color: #ff6188;">M</span>
        <span style="color: #fc9867;">o</span>
        <span style="color: #ffd866;">n</span>
        <span style="color: #a9dc76;">o</span>
        <span style="color: #78dce8;">k</span>
        <span style="color: #ab9df2;">a</span>
        <span style="color: #ab9df2;">i</span></a>.
    </footer>
  </div>
</template>
<script>

export default {
  name: 'App'
}
</script>

<style>

  html, body {
    background-image: -o-linear-gradient(to bottom right, #383838, #272822);
    background-image: -ms-linear-gradient(to bottom right, #383838, #272822);
    background-image: -moz-linear-gradient(to bottom right, #383838, #272822);
    background-image: -webkit-linear-gradient(to bottom right, #383838, #272822);
    background-image: linear-gradient(to bottom right, #383838, #272822);
    background-repeat: no-repeat;
    overflow: auto;
    font-family: 'Raleway', sans-serif;
    font-size: 100%;
    color: #eaeaea;
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

  .filter-router-container {
    display: flex;
    justify-content: space-between;
    margin: 15px 22px 7px 22px;
  }

  #header {
    flex-basis: 40%;
  }

  a {
    color: #ab9df2;
    text-decoration: none;
  }

  .router-link {
    font-size: 20px; 
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

  .item h3, #about p {
    font-family: 'Karma', serif;
  }

  footer {
    color: #eaeaea;
    text-align: center;
    margin: 20px 0;
    font-size: 15px;
  }

  .lib-code {
    background-color: #bababa;
    color: black;
    padding: 1px 4px;
    border-radius: 3px;
  }

  .lib-code, #monokai-anchor {
    font-family: 'Fira Code', monospace;
  }

  #monokai-anchor {
    letter-spacing: 0.5px;
  }

  @media only screen and (max-width: 1000px) {
      .header_container {
        display: block;
        width: 97%;
        margin: auto;
      }

      #header_title {
        margin-bottom: 16px;
      }

      .filter-router-container {
        display: block;
      }

      .filter-router-container .router-link {
        width: 100%;
        display: block;
        text-align: center;
        margin-top: 12px;
      }
    }
  
</style>
