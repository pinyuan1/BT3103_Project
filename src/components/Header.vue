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
=======
  
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