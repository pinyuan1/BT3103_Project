import {Bar} from 'vue-chartjs'
import database from './firebase.js'

export default{
    extends:Bar,
    data: function () {
        return {
            datacollection: {
                labels: [],
                datasets: [{
                   label: "Number of Deadlines",
                    backgroundColor: 'orange',
                    borderWidth: 10,
                    data: [],
                    fill: true
                  }],
            },
            options: {
                legend: { display: false },
                title: {
                  display: true,
                  text: 'Number of Deadlines of Each User',
                  fontColor: '#484856',
                  fontSize: 19
                },
                scales: {
                  yAxes: [{
                    ticks:{
                      min: 0
                    }
                  }]
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
      },
      
      methods:{
        fetchItems:function(){
          let taskDict = {};
          let numOfTask = '';
          database.collection('tasks').get().then((querySnapShot)=>{
            querySnapShot.forEach(doc=>{
              if(doc.data().Username in taskDict) {
                numOfTask = taskDict[doc.data().Username]; 
                taskDict[doc.data().Username] = numOfTask + 1;
              } else {
                taskDict[doc.data().Username] = 1;
              }
            })
          for (let user in taskDict) {
            this.datacollection.labels.push(user);
            this.datacollection.datasets[0].data.push(taskDict[user]);
          }
          this.renderChart(this.datacollection, this.options)
        })
      }
  },

    created () {
      this.fetchItems()
    }
  }
