import {Pie} from 'vue-chartjs'
export default{
    extends:Pie,
    data: () => ({
        chartdata: {
          labels: ['Acedemic', 'Others' ],
          datasets: [
            {
              label: 'Numbers of Deadlines',
              data: [1200, 1900],
              backgroundColor:['aqua', 'orange'],
            },
          ]
          
        },
        options: {
            title:{
              display:true,
              text:'Most Types of Deadlines',
              fontColor:'Black',
              fontSize:15
            },

            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                  var total = meta.total;
                  var currentValue = dataset.data[tooltipItem.index];
                  var percentage = parseFloat((currentValue/total*100).toFixed(1));
                  return currentValue + ' (' + percentage + '%)';
                },
                title: function(tooltipItem, data) {
                  return data.labels[tooltipItem[0].index];
                }
              },
            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            },
            layout:{
              padding:{
                  left: 5,
                  right: 0,
                  top: 0,
                  bottom: 10
              }
          }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}