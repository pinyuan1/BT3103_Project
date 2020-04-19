import {Bar} from 'vue-chartjs'
export default{
    extends:Bar,
    data: () => ({
        chartdata: {
          labels: ['January', 'February','March','April'],
          datasets: [
            {
                label: 'Acedemic',
                data: [100, 150, 450, 500],
                backgroundColor:['aqua','aqua','aqua','aqua'],
                borderWidth:0.5,
                fill: false
              },
              {
                  label: 'Work',
                  data: [80, 120, 140, 130],
                  backgroundColor:['lightgreen','lightgreen','lightgreen','lightgreen'],
                  borderWidth:0.5,
                  fill: false
              },
              {
                  label: 'CCA',
                  data: [50, 40, 30, 10],
                  backgroundColor:['red','red','red','red'],
                  borderWidth:0.5,
                  fill: false
                },
              {
                  label: 'Others',
                  data: [50, 30, 15, 5],
                  backgroundColor:['orange','orange','orange','orange'],
                  borderWidth:0.5,
                  fill: false
                }
            ]
        },
        
        options: {
            title:{
                display:true,
                text:'Deadlines in Different Months',
                fontColor:'Black',
                fontSize:15

            },
            legend:{
                position:'bottom'
            },
            layout:{
                padding:{
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 5
                }
            },
            scales:{
                xAxes: [{stacked: true,}],
                yAxes:[{
                    ticks:{
                        min:0
                    },
                    stacked: true

                }]
            }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}