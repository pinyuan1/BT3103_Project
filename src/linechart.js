import {Line} from 'vue-chartjs'
export default{
    extends:Line,
    data: () => ({
        chartdata: {
          labels: ['A017785', 'A017862', 'C986528', 'B018629', 'B392710'],
          datasets: [
            {
              label: 'Acedemic',
              data: [40, 45, 52, 54, 50],
              backgroundColor:['aqua','lightgreen','red','orange', 'blue'],
              borderWidth:0.5,
              borderColor:"aqua",
              fill:false
            },
            {
                label: 'Work',
                data: [49, 42, 52, 84, 61],
                backgroundColor:['aqua','lightgreen','red','orange', 'blue'],
                borderWidth:0.5,
                borderColor:"lightgreen",
                fill:false 
              },
              {
                label: 'CCA',
                data: [10, 11, 12, 8, 4],
                backgroundColor:['aqua','lightgreen','red','orange', 'blue'],
                borderWidth:0.5,
                borderColor:"red",
                fill: false
              },
            {
                label: 'Others',
                data: [3, 4, 1, 5, 2],
                backgroundColor:['aqua','lightgreen','red','orange', 'blue'],
                borderWidth:0.5,
                borderColor:"orange",
                fill: false
              }
          ]
          
        },
        options: {
          title:{
            display:true,
            text:'Deadlines of Each User',
            fontColor:'Black',
            fontSize:15
  
        },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}