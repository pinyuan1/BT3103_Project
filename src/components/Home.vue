<template>

  <div class="b">
    <h1> {{message}} </h1>
    <button class="btn"><router-link to="/add" exact v-html="create"></router-link></button>
    <div class="tasks">
  
    <table>
  <tr>
    <th>Category</th>
    <th>Name</th> 
    <th>Deadline</th>

  </tr>
   <tr v-for="(task, index) in tasksList" v-bind:key="task.id" >
    <td>{{task.Category}}</td>
    <td><router-link :to="{path:'task/'+task.id}">{{task.Name}}</router-link></td> 
    <td>{{task.Deadline.toDate().toString().substring(4,21)}} </td>
      <td><button class="btn" name="delete" v-bind:id="task.id" v-on:click="deleteItem(index,task)">Delete</button></td>
  </tr>

</table>
    </div>

  <div>

    <h1> {{message}} </h1>
    <button><router-link to="/add" exact v-html="create"></router-link></button>
    <table>
        <tr class="header">
          <th><h2 class="header">Category</h2></th>
          <th><h2 class="header">Name</h2></th>
          <th><h2 class="header">Deadline</h2></th>
        </tr>
        <tr v-for="(task, index) in tasksList" v-bind:key="task.id" >
            <td><h2>{{task.Category}} </h2><td>
            <td><h2><router-link :to="{path:'task/'+task.id}">{{task.Name}}</router-link></h2></td>
            <td><h2>{{task.Deadline.toDate().toString().substring(4,21)}} </h2></td>
            <td><button name="delete" v-bind:id="task.id" v-on:click="deleteItem(index,task)">Delete</button></td>
        </tr>
    </table>

  </div>
</template>

<script>
import database from '../firebase.js'
export default {
  name: 'home',
  data(){
    return{

        message: 'My tasks',
        create: 'Add New Task',

        message: 'Tasks',
        create: '&plus; New',

        tasksList: [],
        }
  },
  // props: {
  //   username: {
  //     type: String,
  //   }
  // },
  methods:{
    fetchItems:function(){
      let task={}
      //Get all the items from DB
      database.collection('tasks').where('Username','==',this.$store.state.username).orderBy('Deadline').get().then((querySnapShot)=>{
        //Loop through each item
        querySnapShot.forEach(doc=>{
            //console.log(doc.id+"==>"+doc.data())
            task=doc.data()
            task.show=false
            task.id=doc.id
            this.tasksList.push(task)
        })
      })
      
    },
    deleteItem:function(index,task){
      //Deleting from DB
      database.collection('tasks').doc(task.id).delete()
      //Deleting from the itemsList Array
      this.tasksList.splice(index,1)
      //Msg to be displayed. Can be made as an alert
      console.log("Task Deleted Successfully")
    }
    
  },
  //Lifecycle hook
  created(){
      this.fetchItems()
    }
}
</script>

<style scoped>


.b{
  margin: -2% 0 30px 0;
 background:#f1dedb;

}
.btn {
    background-color: #3a4660;
    font-family: Helvetica;

button {
    background-color: #927397;

    border-radius: 10px;
    padding: 8px;
    text-decoration: none;
    color: white;
    font-size: 10pt;

    transition:0.3s;
    
}


.btn:hover{opacity:0.6}


}

button a {
    text-decoration: none;
    color: white;
    font-size: 15pt;

    font-family: Helvetica;
}


.tasks {
  margin: auto;
  width: 60%;
  font-family: Helvetica;
}
h1{
  font-size:40px;
   position:relative; top:20px;
   position:relative; bottom:20px;
   color:#3a4660;
}
table {
  color:#3a4660;
	font-size: 26px;
	line-height: 24px;
  padding: 0 20px;
	margin: 30px auto;
	text-align: left;
  font-family: Helvetica;
	width: 800px;
  padding-bottom: 1.5em;
  border-spacing:0.65em;
  
}	
table a:visited {color:#6B7A8F;} 
td{
  color:6B7A8F;
  padding: 10px 0;
  font-family: Helvetica;
}


}
h2{
  text-align: center;
  display: inline-block;
  padding: 0 20px;
}

</style>
