<template>
	<div id="about">
    <div class="header-container">
      <Header/>
    </div>
    <div class="container">
      <router-link to="/" class="router-link">
        &larr; Home
      </router-link>
      <p>
        Mi nombre es Antonio Hernández y soy desarrollador web en Nalanda Global. Anteriormente, pasé dos años y medio en la unidad de datos de <a href="https://www.elconfidencial.com/"><strong>El Confidencial</strong></a> y otros dos en <a href="https://civio.es/"><strong>Civio</strong></a> desarrollando gráficos, visualizaciones y mapas interactivos. También he trabajado con datos en dos fases: <i>scraping</i> y análisis.
      </p>

      <p>
        En 2016 comencé a estudiar <strong>desarrollo web</strong>, obteniendo el <a href="https://drive.google.com/file/d/1mPsefaAAydTlaxhZ-Klg3R6PA0FABzlQ/view?usp=sharing">Certificado de Profesionalidad de Desarrollo Web con Teconologías Web</a>. Desde entonces, he seguido formándome en esta disciplina ininterrumpidamente.
      </p>

      <p>
        También tengo el grado en Periodismo por la Universidad Rey Juan Carlos con un año en la Hanzehogeschool Groningen (Países Bajos) y cursé el Máster en <strong>Periodismo de Datos</strong> del Centro Universitario Villanueva.
      </p>

      <p>
        Me interesa todo lo relacionado con la <strong>programación</strong> y la web y tengo bastante experiencia con algunas librerías de <strong>visualización de datos</strong> como <span class="lib-code">d3.js</span>, <span class="lib-code">Leaflet.js</span>, <span class="lib-code">Highcharts.js</span> y <span class="lib-code">MapboxGL.js</span>. Para el minado y <strong>análisis de datos</strong> he utilizado el paquete de Python <span class="lib-code">pandas.py</span> y para hacer <i>web scraping</i>, <span class="lib-code">bs4.py</span>. Además, he realizado algunos trabajos con el <strong>sistema de información geográfica</strong> <i>open source</i> QGIS.
      </p>
      <p>
        En cuanto a desarrollo de grandes proyectos de <i>front-end</i>, tengo experiencia con el <i>framework</i> de Javascript <span class="lib-code">Vue.js</span>.
      </p>
      <p>
        Puedes encontrarme en <a href="https://github.com/anerodata">Github</a> y <a href="https://www.linkedin.com/in/antonio-hern%C3%A1ndez-637a2a74/">Linkedin</a>.
      </p>
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

<style scoped>
  #about {
    max-width: 640px;
    margin: auto;
  }

  .header-container {
    display: block;
  }

  .container {
    color: #eaeaea;
    line-height: 1.9em;
    margin: 0 17px;
    font-size: 1.1em;
    letter-spacing: 0.3px;
    font-weight: lighter;
  }

  .router-link {
    width: 100%;
    margin-bottom: 10px;
  }

</style>
