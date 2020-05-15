<template>
	<div id="about">
    <div class="header_container">
      <Header/>
    </div>
    <div class="container" style="color: #efefef; line-height: 30px; height: 100vh; margin: 0 17px; max-width: 640px; font-size: 17px; letter-spacing: 0.3px; font-weight: lighter; ">
      <p>
        Mi nombre es Antonio Hernández, soy desarrollador web en <a href="https://civio.es/"><strong>Civio</strong></a>. Anteriormente, pasé dos años y medio en la unidad de datos de <a href="https://www.elconfidencial.com/"><strong>El Confidencial</strong></a>. Desarrollo gráficos, visualizaciones y mapas interactivos. Y trabajo con datos en dos fases: <i>scraping</i> y análisis.
      </p>

      <p>
        En 2016 comencé a formarme en desarrollo web, obteniendo el <a href=""><strong>Certificado de Profesionalidad de Desarrollo Web con Teconologías Web</strong></a>. Desde entonces, he segido formandome en esta disciplina ininterrumpidamente.
      </p>

      <p>
        También tengo el grado en Periodismo por la Universidad Rey Juan Carlos con un año en la Hanzehogeschool Groningen (Países Bajos) y cursé el Máster en Periodismo de Datos del Centro Universitario Villanueva.
      </p>

      <p>
        Me interesa todo lo relacionado con la programación y la web. No obstante, siento predilección por la visualicación de datos. Tengo bastante esperiencia con <code>d3.js</code>, <code>Leaflet.js</code>, <code>Highcharts.js</code> y <code>MapboxGL.js</code>. Para el minado y análisis de datos utilizo el paquete de Python <code>pandas.py</code> y para hacer <i>web scraping</i>, <code>bs4.py</code>. Además, he realizado algunos trabajos de cartografía con la herramienta <i>open source</i> QGIS.
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
	p a{
    color: #ab9df2;
    text-decoration: none;
  } 
</style>