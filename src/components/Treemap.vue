<template>
  <div class="treemap_container">
    <svg id="chart"></svg>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'Treemap',
  props: ['data'],
  data() {
    return {
      id: 'chart',
      svg:  null,
      width: null,
      height: null,
      pad: {
        top: 10, left: 0, bottom: 0, right: 0
      },
      labels: {
        'js': 'Javascript',
        'py': 'Python',
      }
    }
  },
  mounted() {
    this.dimensions()
  	this.createTreemap()
  },
  methods: {
    dimensions() {
      this.width = this.$el.clientWidth - 24
      this.height = d3.select('#header_title').node().clientHeight
      this.svg = d3.select(`#${this.id}`)
        .attr('width', this.width)
        .attr('height', this.height)
    },
    createTreemap() {

      const treemapLayout = d3.treemap()
        .size([this.width, this.height])
        .paddingInner(5)
        .paddingOuter(0)

      const root = d3.hierarchy(this.data)
      root.sum(function(d) {
        return d.value;
      });
      treemapLayout(root)
      d3.select('svg')
        .append('g')
        .attr('class', 'rects')

      d3.select('svg')
        .append('g')
        .attr('class', 'labelContainers')

      d3.select('svg')
        .append('g')
        .attr('class', 'labels')

      d3.select('.rects')
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
            return d.parent.data.name + ' child'
          }  else {
            return d.data.name + ' parent'
          }
        })

      d3.select('.labels')
        .selectAll('text')
        .data(root.descendants())
        .enter()
        .filter(d => d.children !== undefined && d.data.name !== 'all' && d.data.name !== 'Otras')
        .append('text')
        .attr('id', (d) => 'text-'+d.data.name)
        .attr('x', d => {
          return d.x0 + (d.x1 - d.x0) / 2 - 6
        })
        .attr('y', d => {
          return d.y1 / 2
        })
        .text(d => this.labels[d.data.name])

      d3.select('.labelContainers')
        .selectAll('rect')
        .data(root.descendants())
        .enter()
        .filter(d => d.children !== undefined && d.data.name !== 'all' && d.data.name !== 'Otras')
        .append('rect')
        .attr('x', d => {
          return d3.select('.labels')
                    .select('#text-'+d.data.name).node()
                    .getBBox().x - 6
        })
        .attr('y', d => {
          return d3.select('.labels')
                    .select('#text-'+d.data.name).node()
                    .getBBox().y - 1
        })
        .attr('width', (d) => {
          return d3.select('.labels')
                    .select('#text-'+d.data.name).node()
                    .getBBox().width + 11
        })
        .attr('height', (d) => {
          return d3.select('.labels')
                    .select('#text-'+d.data.name).node()
                    .getBBox().height + 4
        })
        .attr('fill', 'white')

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

  svg rect {
    rx: 3;
    ry: 2;
  }
</style>
