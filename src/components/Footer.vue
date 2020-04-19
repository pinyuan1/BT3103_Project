<template>
    <div class="footerStyle">
        <footer>
            <p v-html="copyRtSymbol"></p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            copyRtSymbol: '&copy;Group 404'
        }
    }
}
</script>

<style scoped>
.footerStyle{
  /*   background:#f1dedb;*/
background-image: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(Our-Work-Banner.png);
       margin: -2% 0 30px 0;
}
p{
    color: white;
    
}
</style>