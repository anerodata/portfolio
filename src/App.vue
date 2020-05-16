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

  a {
    color: #ab9df2;
    text-decoration: none;
  }

  #app, .container {
    max-width: 1200px;
    margin: auto;
  }

  .header-container {
    margin-top: 16px;
    width: 100%;
    display: flex;
  }

  .router-link {
    font-size: 1.2em; 
  }

  /* Treemap and Item */

  span.js, #tooltip.js {
    color: #ff6188;
    border: 1px solid #ff6188;
  }

  span.py, #tooltip.py {
    color: #ab9df2;
    border: 1px solid #ab9df2;
  }

  span.Otras, #tooltip.Otras {
    color: #fc9867;
    border: 1px solid #fc9867;
  }

  rect, .item-package span {
    opacity: 0.7;
  }

  /* Items About */

  .item h3, #about p {
    font-family: 'Karma', serif;
  }

  /* Footer */

  footer {
    max-width: 640px;
    color: #eaeaea;
    text-align: center;
    margin: 20px auto;
    font-size: 15px;
    line-height: 24px;
  }

  #monokai-anchor {
    letter-spacing: 0.5px;
  }

  /* Footer and About*/

  .lib-code {
    background-color: #bababa;
    color: black;
    padding: 1px 4px;
    border-radius: 3px;
  }

  .lib-code, #monokai-anchor {
    font-family: 'Fira Code', monospace;
  }

  @media only screen and (max-width: 1000px) {
    .header-container {
      display: block;
      width: 97%;
      margin: auto;
    }

    .router-link {
      font-size: 1.1em; 
    }
  }
  
</style>
