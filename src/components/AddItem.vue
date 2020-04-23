<template>
<body>
    <div id=app>
        <h1> {{message}} </h1>
     
             <table>
  <tr>
    <td>  <label>Name</label></td>
    <td><input type="text" v-model.lazy="task.Name" required/></td> 
  
  </tr>
  <tr>
    <td> <label>Description</label></td>
    <td>  <input type="text" v-model.lazy="task.Description" required/></td> 
 
  </tr>
  <tr>
    <td> <label>Deadline</label></td>
    <td><input type="date" v-model.lazy="task.Deadline" required/></td> 

  </tr>
   <tr>
    <td>  <label>Link</label></td>
    <td> <input type="text" v-model.lazy="task.Links" required/></td> 

  </tr>
   <tr>
    <td>   <label for="category">Choose task's category:</label></td>
    <td>
          <select id="category" name="category" form="category" v-model.lazy="task.Category">
            <option value="Academic">Academic</option>
            <option value="Work">Work</option>
            <option value="CCA">CCA</option>
            <option value="Others">Others</option>
        </select>
        </td> 

  </tr>
  </table>
        <!--    <form id="fm1"><label>Name</label>
        <input type="text" v-model.lazy="task.Name" required/>
        <label>Description</label>
        <input type="text" v-model.lazy="task.Description" required/>
        <label>Deadline</label>
        <input type="date" v-model.lazy="task.Deadline" required/>
        <label>Link</label>
        <input type="text" v-model.lazy="task.Links" required/>
        </form>

        <label for="category">Choose task's category:</label>
        <select id="category" name="category" form="category" v-model.lazy="task.Category">
            <option value="Academic">Academic</option>
            <option value="Work">Work</option>
            <option value="CCA">CCA</option>
            <option value="Others">Others</option>
        </select> -->

        <button class="btn" v-on:click.prevent="addTask">Add Task</button>
    </div>
    </body>
</template>

<script>
import database from '../firebase.js'
export default {
    data() {
        return {
            message: 'Add new task',
            task:{
                Name:'',
                Category:'',
                Description:'',
                Deadline:new Date(),
                Links:''
            },
        }
    },
    methods:{
        addTask (){
            database.collection('tasks').add({
                Name:this.task.Name,
                Category:this.task.Category,
                Description:this.task.Description,
                Deadline:new Date(this.task.Deadline),
                Links:this.task.Links,
                Username:this.$store.state.username
            });
            this.task.Name="";
            this.task.Category="";
            this.task.Description="";
            this.task.Deadline =new Date();
            this.task.Links="";
            alert("Task created successfully")
        }
    }
}


</script>

<style scoped>
.btn {
    background-color: #3a4660;
    font-family: Helvetica;
    border-radius: 10px;
    padding: 8px;
    text-decoration: none;
    color: white;
    font-size: 16pt;
    transition:0.3s;
    margin-bottom: 35px;
}

.btn:hover{opacity:0.6}

button a {
    text-decoration: none;
    color: white;
    font-size: 15pt;
    font-family: Helvetica;
}
body{
	background-color: #f1dedb;;
	font-family: Helvetica;
	margin: -2% 0 0 0;
	margin-bottom: 0em;
}
#app{
    box-sizing: border-box;
    font-size:20px;
   
	font-family: Helvetica;
    margin: auto;
    max-width: 500px;
}
h1{
  font-size:36px;
  font-family: Helvetica;
   position:relative; top:20px;
   position:relative; bottom:20px;
   color:#3a4660;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    align-content:left;
     font-family: Helvetica;

}

input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:100%;
    font-size:18px;
     font-family: Helvetica;
       color:#6B7A8F;
}
input[type="date"]{
    display: inline-block;
    padding: 8px;
    width:100%;
    font-size:18px;
     font-family: Helvetica;
       color:#6B7A8F;
}
table {
  color:#6B7A8F;
	font-size: 24px;
	line-height: 24px;
	text-align: left;
  font-family: Helvetica;
  padding-bottom: 0.5em;
  border-spacing:0.25em;
  font-weight: bold;
}	

td{
  color:#6B7A8F;
  padding: 10px 0;
  font-family: Helvetica;
}
select {
    -webkit-appearance: button;
    -moz-appearance: button;
    -webkit-user-select: none;
    -moz-user-select: none;
    -webkit-padding-end: 20px;
    -moz-padding-end: 20px;
    -webkit-padding-start: 2px;
    -moz-padding-start: 2px;
     width:100%;
    border: 1px solid #AAA;
    border-radius: 2px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    color: #6B7A8F;
    font-size: 18px;
    margin: 0;
    overflow: hidden;
    padding-top: 2px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

</style>