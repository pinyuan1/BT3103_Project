<template>
    <div class="headerStyle">
        <h1>{{title}}</h1>
        <nav>
            <ul>
                <li><router-link to="/home" exact v-html="home"></router-link></li>
                <li><router-link to="/dashboard" exact v-html="dashboard"></router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'NUS Deadline Scheduler',
            home: '	&#127968;Homepage',
            dashboard: '&#128202;Dashboard'
        }
    },
}
</script>

<style scoped>
/*
nav{
    
   background-color:aqua;
   
    margin: 0 -8px;
    background-image: url(Our-Work-Banner.png)
}
*/
h1{
    font-size: 50px;
    margin-top:0px;
    font-family: Helvetica;
    position:relative; top:20px
}
.router-link-active{
     
    color: #3a4660;
    font-weight: bold;
    text-decoration: none;
    font-family: Helvetica;
}
ul{
    list-style-type: none;
    text-align: right;
}
li{
    display: inline-block;
    
}
li a{
  font-size: 20px;
  color:#6B7A8F;  
  font-weight: bold;
  text-decoration: none; 
  font-family: Helvetica;
}
.headerStyle{
font-size:30px;
background-image: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(Our-Work-Banner.png);
font-family: Helvetica;
background-origin: inherit;
 color:#3a4660;  
 margin: -4% 0 30px 0;
}
</style>