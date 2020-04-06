<template>
    <div>
        <h1> current task id is {{message}} </h1>
    </div>
</template>

<script>
//import database from '../firebase.js'
export default {
    data() {
        return {
            message: this.$route.params.id
        }
    }
}
</script>

<style scoped>
</style>