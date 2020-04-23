<template>
    <div id="main">
        <div id="chart">
            <barchart></barchart>
        </div>

        <div id="chart">
            <linechart></linechart>
        </div>

        <div id="chart">
            <piechart></piechart>
        </div>
    </div>
</template>

<script>
import linechart from '../linechart.js'
import barchart from '../barchart.js'
import piechart from '../piechart.js'
export default {
    components:{
        linechart, barchart, piechart
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:400px;
  width:400px;
 
  padding:30px;
  float:left;
}
</style>