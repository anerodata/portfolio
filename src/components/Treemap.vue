<template>
  <div class="treemap_container">
    <svg></svg>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'Treemap',
  props: ['data'],
  data() {
    return {
      pad: {
        top: 10, left: 0, bottom: 0, right: 0
      }
    }
  },
  mounted() {
  	this.createTreemap()
  },
  methods: {
    createTreemap() {
      console.dir(d3.select('#header').node())
      const height = d3.select('#header_title').node().clientHeight 
      const width = this.$el.clientWidth - 24

      d3.select('svg')
        .attr('width', width)
        .attr('height', height)

      const treemapLayout = d3.treemap()
        .size([width, height])
        .paddingInner(5)
        .paddingOuter(0)

      const root = d3.hierarchy(this.data)
      root.sum(function(d) {
        return d.value;
      });
      treemapLayout(root)
      d3.select('svg')
        .selectAll('rect')
        .data(root.descendants())
        .enter()
        .append('rect')
        .attr('x', d => d.x0)
        .attr('y', d => d.y0)
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .attr('class', d => {
          console.log(d.data.name)
          if(d.parent !== null && d.parent.data.name !== 'all') {
            return d.parent.data.name + ' child'
          }  else {
            return d.data.name + ' parent'
          }
        })
    }
  }
}
</script>
<style>

  .treemap_container {
    flex-basis: 60%;
  }

  .parent {
    fill: none;
  }

  .child {
    fill: white;
  }

  .child.js {
    fill: #ff6188;
  }

  .child.py {
    fill: #ab9df2;
  }

  .child.Otras {
    fill: #fc9867;
  }

  svg rect {
    rx: 3;
    ry: 2;
    opacity: 0.8;
  }
</style>
