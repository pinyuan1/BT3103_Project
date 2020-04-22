<template>
    <div class="detail">
        <h1> Project specifications</h1>

        <table>
  <tr v-for="(task) in tasksList" v-bind:key="task.id" >
    <th>Category: </th>
    <th>{{task.Category}}</th> 

  </tr>
  
  <tr v-for="(task) in tasksList" v-bind:key="task.id" >
    <th>Name: </th>
    <th>{{task.Name}}</th> 

  </tr>
   <tr v-for="(task) in tasksList" v-bind:key="task.id" >
    <th>Deadline: </th>
    <th>{{task.Deadline.toDate().toString().substring(4,21)}}</th> 

  </tr>
 <tr v-for="(task) in tasksList" v-bind:key="task.id" >
    <th>Project description: </th>
    <th>{{task.Description}} </th> 

  </tr>
   <tr v-for="(task) in tasksList" v-bind:key="task.id" >
    <th>Google drive link: </th>
    <th>{{task.Links}}  </th> 
  </tr>
  
</table>
 </div>
</template>

 <script>
// //import database from '../firebase.js'
//  export default {
//      data() {
//          return {
//             task_name: this.$route.params
//         }
//      }
//  } 
// </script>
<script>
import database from '../firebase.js'
export default {
  data(){
    return{
        message: 'My tasks',
        create: 'Add New Task',
        tasksList: [],
        task_name: this.$route.params
        }
  },
  methods:{
    fetchItems:function(){
      let task={}
      //Get all the items from DB
      database.collection('tasks').where('Username','==',this.$store.state.username).get().then((querySnapShot)=>{
        //Loop through each item
        querySnapShot.forEach(doc=>{
            //console.log(doc.id+"==>"+doc.data())
          
            if(doc.id==this.$route.params.id){
            task=doc.data()
            task.show=false
            task.id=this.$route.params.id
            this.tasksList.push(task)
            }
           
        })
      })
      
    }
    
  },
  created(){
      this.fetchItems()
    }
}
</script>
<style scoped>
table {
  color:#6B7A8F;
	font-size: 24px;
	line-height: 24px;
  padding: 0 20px;
	margin: 30px auto;
	text-align: center;
  font-family: Helvetica;
	width: 800px;
  padding-bottom: 1.5em;
  border-spacing:0.65em;
  position:relative;
  
}	
th{
  font-size: 26px;
   font-family: Helvetica;
}
.detail{
  margin: -2% 0 30px 0;
 background:#f1dedb;
}
h1{
  font-size:36px;
  font-family: Helvetica;
   position:relative; top:20px;
   position:relative; bottom:20px;
   color:#3a4660;
}
</style>