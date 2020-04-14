<template>
    <div class="headerStyle">
        <h1>{{title}}</h1>
        <nav>
            <ul>
                <li><router-link to="/" exact v-html="home"></router-link></li>
                <li><router-link to="/dashboard" exact v-html="dashboard"></router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Deadline Scheduler',
            home: '	&#127968;Homepage',
            dashboard: '&#128202;Dashboard'
        }
    },
}
</script>

<style scoped>
h1{
    color: black;
    font-size: 30px;
    margin: -30px 0 20px 0;
}
nav{
    background:#927397;
    padding: 8px 0;
    margin: 0 -8px;
}
.router-link-active{
    color: #444;
    font-weight: bold;
    text-decoration: none;
}
ul{
    list-style-type: none;
    text-align: right;
    margin: 0;

}
li{
    display: inline-block;
    margin: 0 10px;
    
}
li a{
  font-size: 15px;
  color:white;  
  text-decoration: none; 
}
</style>