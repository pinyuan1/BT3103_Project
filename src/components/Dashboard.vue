<template>
    <div id="main">
        <div id="chart2">
            <linechart></linechart>
        </div>

        <div id="chart3">
            <barchart></barchart>
        </div>
        <br>

        <div id="chart1">
            <doughnut1></doughnut1>
        </div>
         <br>

         <div id="chart1">
            <doughnut2></doughnut2>
        </div>

        <br>
        <div id="chart1">
            <piechart></piechart>
        </div>
    </div>
</template>

<script>
import linechart from '../linechart.js'
import barchart from '../barchart.js'
import doughnut1 from '../doughnut1.js'
import doughnut2 from '../doughnut2.js'
import piechart from '../piechart.js'
export default {
    components:{
        linechart, barchart, doughnut1, doughnut2, piechart
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart1{
  height:280px;
  width:280px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
#chart2{
  height:480px;
  width:480px;
  float:left;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
#chart3{
  height:480px;
  width:480px;
  float:right;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
</style>