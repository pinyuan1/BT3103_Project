import {Pie} from 'vue-chartjs'
import database from './firebase.js'

export default{
    extends:Pie,
    data: function () {
          return {
              datacollection: {
                labels: [],
                datasets: [{
                  label: "Numbers of Deadlines",
                  backgroundColor:['blue','lightgreen','red','orange'],
                  data: []
                }],
              },
              options: {
                legend: { display: false },
                title:{
                  display:true,
                  text:'Different Categories of Deadlines',
                  fontColor:'#484856',
                  fontSize: 19
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
              responsive: true,
              maintainAspectRatio: false,
            }
          }
        },

    methods:{
      fetchItems:function(){
        let types = {};
        let numOfTask = '';
        database.collection('tasks').get().then((querySnapShot)=>{
          querySnapShot.forEach(doc=>{
            if(doc.data().Category in types) {
              numOfTask = types[doc.data().Category]; 
              types[doc.data().Category] = numOfTask + 1;
            } else {
              types[doc.data().Category] = 1;
            }
          })
        for (let type in types) {
          this.datacollection.labels.push(type);
          this.datacollection.datasets[0].data.push(types[type]);
        }
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
      
  created () {
    this.fetchItems()
  }
}