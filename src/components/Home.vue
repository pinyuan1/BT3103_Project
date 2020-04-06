<template>
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
  data(){
    return{
        message: 'Tasks',
        create: '&plus; New',
        tasksList: [],
        }
  },
  methods:{
    fetchItems:function(){
      let task={}
      //Get all the items from DB
      database.collection('tasks').orderBy('Deadline').get().then((querySnapShot)=>{
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
button {
    background-color: #927397;
    border-radius: 10px;
    padding: 8px;
    text-decoration: none;
    color: white;
    font-size: 10pt;
}
button a {
    text-decoration: none;
    color: white;
    font-size: 15pt;
}
h2{
  text-align: center;
  display: inline-block;
  padding: 0 20px;
}
</style>
