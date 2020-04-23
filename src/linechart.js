import {Line} from 'vue-chartjs'
import database from './firebase.js'

export default{
    extends:Line,
    data: function () {
        return {
            datacollection: {
                labels: [],
                datasets: [
                  {
                    label: "Academic",
                    borderColor:"blue",
                    backgroundColor:'blue',
                    fill:false,
                    data: []
                  },
                  {
                      label: "Work", 
                      borderColor:"orange",
                      backgroundColor:'orange',
                      fill:false,
                      data: []
                    },
                    {
                      label: "CCA", 
                      borderColor:"red",
                      backgroundColor:'red',
                      fill:false,
                      data: []
                    },
                    {
                      label: "Others", 
                      borderColor:"lightgreen",
                      backgroundColor:'lightgreen',
                      fill:false,
                      data: []
                    },
                    {
                      label: "Total", 
                      borderColor:"grey",
                      backgroundColor:'grey',
                      fill:true,
                      data: []
                    },
                ],
              },
              options: {
                title: {
                  display: true,
                  text: 'Numbers of Deadlines in Each Month',
                  fontColor: 'Black',
                  fontSize: 19
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
                    xAxes: [],
                    yAxes:[{
                        ticks:{
                            min:0
                        },
    
                    }]
                }
              
            }
    
        }
      },
      
      methods:{
        getMonth: function(ddl) {
          let months = {
            "0": "January",
            "1": "February",
            "2": "March",
            "3": "April",
            "4": "May",
            "5": "June",
            "6": "July",
            "7": "August",
            "8": "September",
            "9": "October",
            "10": "November",
            "11": "December"
          };
          let month = months[ddl.toDate().getMonth()];
          return month;
        },
        
        fetchItems:function(){
          let months = [
            {"January": 0, "February" : 0, "March" : 0, "April":0,
            "May": 0, "June": 0, "July": 0, "August": 0, 
            "September": 0, "October": 0, "November": 0, "December": 0},
            {"January": 0, "February" : 0, "March" : 0, "April":0,
            "May": 0, "June": 0, "July": 0, "August": 0, 
            "September": 0, "October": 0, "November": 0, "December": 0},
            {"January": 0, "February" : 0, "March" : 0, "April":0,
            "May": 0, "June": 0, "July": 0, "August": 0, 
            "September": 0, "October": 0, "November": 0, "December": 0},
            {"January": 0, "February" : 0, "March" : 0, "April":0,
            "May": 0, "June": 0, "July": 0, "August": 0, 
            "September": 0, "October": 0, "November": 0, "December": 0},
            {"January": 0, "February" : 0, "March" : 0, "April":0,
            "May": 0, "June": 0, "July": 0, "August": 0, 
            "September": 0, "October": 0, "November": 0, "December": 0},
           ];
          let numOfTask = '';
          let thisM = ''
          database.collection('tasks').get().then((querySnapShot)=>{
            querySnapShot.forEach(doc=>{
              if (doc.data().Category == "Academic") {
                thisM = this.getMonth(doc.data().Deadline)
                numOfTask = months[0][thisM]; 
                months[0][thisM] = numOfTask + 1;
              }
              if (doc.data().Category == "Work"){
                thisM = this.getMonth(doc.data().Deadline)
                numOfTask = months[1][thisM]; 
                months[1][thisM] = numOfTask + 1;
              }
              if (doc.data().Category == "CCA"){
                thisM = this.getMonth(doc.data().Deadline)
                numOfTask = months[2][thisM]; 
                months[2][thisM] = numOfTask + 1;
              }
              if (doc.data().Category == "Others"){
                thisM = this.getMonth(doc.data().Deadline)
                numOfTask = months[3][thisM]; 
                months[3][thisM] = numOfTask + 1;
              }
              thisM = this.getMonth(doc.data().Deadline)
                numOfTask = months[4][thisM]; 
                months[4][thisM] = numOfTask + 1;
            })
          for (let month in months[0]) {
            this.datacollection.labels.push(month);
            this.datacollection.datasets[0].data.push(months[0][month]);
          }
          for (let month in months[1]) {
            this.datacollection.datasets[1].data.push(months[1][month]);
          }
          for (let month in months[2]) {
            this.datacollection.datasets[2].data.push(months[2][month]);
          }
          for (let month in months[3]) {
            this.datacollection.datasets[3].data.push(months[3][month]);
          }
          for (let month in months[4]) {
            this.datacollection.datasets[4].data.push(months[4][month]);
          }
          this.renderChart(this.datacollection, this.options)
        })
      }
  },
    created () {
      this.fetchItems()
    }
  }
