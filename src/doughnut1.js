import {Doughnut} from 'vue-chartjs'
export default{
    extends:Doughnut,
    data: () => ({
        chartdata: {
          labels: ['January', 'February','March','April'],
          datasets: [
            {
              label: 'Acedemic',
              data: [100, 150, 450, 500],
              backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"#000"
            },
            {
                label: 'Work',
                data: [80, 120, 140, 130],
                backgroundColor:['aqua','lightgreen','red','orange'],
            }
          ]
          
        },
        options: {
            title:{
              display:true,
              text:'Compare Acedemic Deadlines and Work Deadlines',
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