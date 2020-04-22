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


  <div class="headerStyle">
        <nav>
          <h1>{{ title }}</h1>
          <ul>
             <li><router-link to="/" exact>Login</router-link></li>
             <li><router-link to="/signup" exact>Signup</router-link></li>
          </ul>
        </nav>
  </div>


</template>

<script>
export default {

    data() {
        return {
            title: 'NUS Deadline Scheduler',


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

h1{
    color: black;
    font-size: 30px;
    margin: -30px 0 20px 0;
}
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
}
ul{
    list-style-type: none;
    text-align: right;

    margin: 0;

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




    margin: 0 10px;
    
}
li a{
  font-size: 20px;
  color:#6B7A8F;  
  font-weight: bold;
  text-decoration: none; 

  
  data(){
    return{
        msg: '404'
        }
  },
  props:{
    title:{
      type:String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    padding:6px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory;
    background: rgb(122, 63, 100);
    font-size: 30px;
}
nav{
    background: rgb(122, 63, 100);
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: ivory;
    color: #444;
}
ul{
    list-style-type: none;
    text-align: left;
    margin: 0;
}
li{
    
    display: inline-block;
    margin: 0 10px;
}
li a{
  
  font-size: 18px;
  color:ivory;
    

}

</style>