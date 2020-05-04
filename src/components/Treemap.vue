<template>
  <div class="treemap_container">
    <svg width="800px" height = "130px"></svg>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'Treemap',
  props: ['data'],
  mounted() {
  	this.createTreemap()
  },
  methods: {
    createTreemap() {
      const treemapLayout = d3.treemap()
        .size([800, 130])
        .paddingInner(5)
        .paddingOuter(5)

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
          if(d.parent !== null && d.parent.data.name !== 'all') {
            return d.parent.data.name
          } 
        })
    }
  }
}
</script>
<style>
  .js, .py, .Otras {
    fill: white;
  }

  svg rect {
    rx: 3;
    ry: 2;
  }
</style>
