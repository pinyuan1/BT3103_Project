import {Doughnut} from 'vue-chartjs'
export default{
    extends:Doughnut,
    data: () => ({
        chartdata: {
          labels: ['January', 'February','March','April'],
          datasets: [
            {
                label: 'CCA',
                data: [50, 40, 30, 10],
                backgroundColor:['aqua','lightgreen','red','orange'],
              },
            {
                label: 'Others',
                data: [50, 30, 15, 5],
                backgroundColor:['aqua','lightgreen','red','orange'],
              }
          ]
        },
        options: {
            title:{
              display:true,
              text:'Compare CCA Deadlines and Other Deadlines',
              fontColor:'Black',
              fontSize:15
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