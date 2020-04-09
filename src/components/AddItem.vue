<template>
    <div id=app>
        <h1> {{message}} </h1>
        <form id="fm1">
        <label>Name</label>
        <input type="text" v-model.lazy="task.Name" required/>
        <label>Category</label>
        <input type="text" v-model.lazy="task.Category"/>
        <label>Description</label>
        <input type="text" v-model.lazy="task.Description" required/>
        <label>Deadline</label>
        <input type="date" v-model.lazy="task.Deadline" required/>
        <label>Link</label>
        <input type="text" v-model.lazy="task.Links" required/>
        <button v-on:click.prevent="addTask">Add Task</button>
        </form>
    </div>
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
                Links:'',
            },
        }
    },
    methods:{
        addTask (){
            database.collection('tasks').add(this.task);
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
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>