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
</style>