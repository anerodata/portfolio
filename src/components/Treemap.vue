<template>
  <div class="treemap_container">
    <svg id="chart" height="0"></svg>
    <div id="tooltip"></div>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'Treemap',
  props: {
    data: Object
  },

  data() {
    return {
      id: 'chart',
      svg:  null,
      root: null,
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

  watch: {
    // First load
    data() {
      this.init()
    }
  },

  mounted() {
    // Load when the user returns from another page (about)
    if (this.data.children) {
      this.init()
    }
  },
  
  methods: {
    init() {
      this.svg = d3.select(`#${this.id}`)
      this.dimensions()
      this.treemapRootData()
      this.treemapLayout()
      this.bones()
      this.createTreemap()
      window.addEventListener('resize', this.redraw);
    },
    
    dimensions() {
      let chartPercentWidth = null
      if (window.innerWidth > 1000) {
        chartPercentWidth = 60
      } else {
        chartPercentWidth = 100
      }

      this.width = d3.select(`#${this.id}`)
        .node()
        .parentNode
        .parentNode
        .clientWidth * chartPercentWidth / 100

      this.height = 80
      this.svg
        .attr('width', this.width)
        .attr('height', this.height)
    },

    treemapRootData() {
      this.root = d3.hierarchy(this.data)
      this.root.sum(function(d) {
        return d.value;
      });
    },

    treemapLayout() {
      const treemapLayout = d3.treemap()
        .size([this.width, this.height])
        .paddingInner(5)
        .paddingOuter(0)

      treemapLayout(this.root)
    },

    bones() {
      this.svg
        .append('g')
        .attr('class', 'rects')

      this.svg
        .append('g')
        .attr('class', 'labelContainers')
        .attr('opacity', 1)

      this.svg
        .append('g')
        .attr('class', 'labels')
        .attr('opacity', 1)
    },

    createTreemap() {
      this.svg
        .select('.rects')
        .selectAll('rect')
        .data(this.root.descendants())
        .enter()
        .append('rect')
        .attr('rx', 3)
        .attr('ry', 2)
        .call(rects => {
          return this.drawRects(rects)
        })
        .on('mouseover', (d, i, nodes) => {
          this.setHighClass(nodes[i])
        })
        .on('mousemove', (d, i, nodes) => {
          this.moveTooltip(d3.mouse(nodes[i]))
          if(d.children === undefined) {
            this.writeTooltip(d)
          }
        })
        .on('mouseout', (d, i, nodes) => {
          this.removeHighClass(nodes[i])
          this.hidTooltip()
        })

      this.svg
          .on('mouseover', () => this.hidLabels())

      this.svg
          .on('mouseout', () => this.showLabels())

      this.svg
        .select('.labels')
        .selectAll('text')
        .data(this.root.descendants())
        .enter()
        .filter(d => d.children !== undefined && d.data.name !== 'all' && d.data.name !== 'Otras')
        .append('text')
        .call(texts => {
          return this.drawTexts(texts)
        })

      this.svg
        .select('.labelContainers')
        .selectAll('rect')
        .data(this.root.descendants())
        .enter()
        .filter(d => d.children !== undefined && d.data.name !== 'all' && d.data.name !== 'Otras')
        .append('rect')
        .call(containers => {
          return this.drawLabelContainers(containers)
        })
    },

    drawRects(rects) {
      rects
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
    },

    drawTexts(texts) {
      texts
        .attr('id', (d) => 'text-'+d.data.name)
        .attr('class', (d) => d.data.name)
        .attr('x', d => {
          console.log(d)
          return d.x0 + (d.x1 - d.x0) / 2
        })
        .attr('y', d => {
          return d.y1 / 2
        })
        .text(d => {
          return `${this.labels[d.data.name]}: ${d.value}`
        })
      // Adjusting text position based on its width
      texts
        .attr('x', d => {
          return d3.select('.labels')
                    .select('#text-'+d.data.name).node()
                    .getBBox().x - 

                    d3.select('.labels')
                    .select('#text-'+d.data.name).node()
                    .getBBox().width / 2
        })
    },

    drawLabelContainers(containers) {
      containers
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
    },

    moveTooltip(mousePos) {
      d3.select('#tooltip')
        .style('display', 'block')
        .style('top', mousePos[1]-8+'px')

      let xPos = null
      if(mousePos[0] > this.width / 2) {
          xPos = this.width - mousePos[0]+8
          d3.select('#tooltip')
            .style('right', xPos+'px')
            .style('left', null)
      } else {
          xPos = mousePos[0]+12
          d3.select('#tooltip')
            .style('left', xPos+'px')
            .style('right', null)
      }
    },

    writeTooltip(d) {
      d3.select('#tooltip')
        .attr('class', d.parent.data.name)
        .text(`${d.data.name}: ${d.value}`)
    },

    hidTooltip() {
      d3.select('#tooltip')
        .style('display', 'none')
    },

    hidLabels() {
      d3.select('.labelContainers')
        .attr('opacity', 0)

      d3.select('.labels')
        .attr('opacity', 0)
    },

    showLabels() {
      d3.select('.labelContainers')
        .attr('opacity', 1)

      d3.select('.labels')
        .attr('opacity', 1)
    },

    setHighClass(rect) {
      d3.select(rect)
        .classed('highClass', true)
    },

    removeHighClass(rect) {
      d3.select(rect)
        .classed('highClass', false)
    },

    redraw() {
      this.dimensions()
      this.treemapLayout()
      this.svg.select('.rects')
        .selectAll('rect')
        .call(rects => {
          return this.drawRects(rects)
        })

      this.svg.select('.labels')
        .selectAll('text')
        .call(texts => {
          return this.drawTexts(texts)
        })

      this.svg.select('.labelContainers')
        .selectAll('rect')
        .call(containers => {
          return this.drawLabelContainers(containers)
        })
    }
  }
}
</script>
<style>

  .treemap_container {
    flex-basis: 60%;
    position: relative;
  }

  .parent {
    fill: transparent;
  }

  .child {
    fill: white;
  }

  #tooltip {
    display: none;
    position: absolute;
    background-color: #383838;
    padding: 3px 7px;
  }
  
  .labelContainers {
    fill: #383838;
  }

  .labelContainers, .labels, #tooltip {
    pointer-events: none;
  }

  .treemap_container .child.highClass {
    opacity: 0.9;
  }

  .child.js, .labels .js {
    fill: #ff6188;
  }

  .child.py, .labels .py{
    fill: #ab9df2;
  }

  .child.Otras, .labels .Otras{
    fill: #fc9867;
  }
</style>
