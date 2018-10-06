<template>
  <div id="app">
    <appHeader />
    <router-view/>
    <appFooter />
  </div>
</template>
<script>
import appHeader from './components/Header'
import appFooter from './components/Footer'
export default {
  components: {
    appHeader,
    appFooter
  },
  mounted () {
    this.$nextTick(() => {
      $('.container').hide()
      $('.container').fadeIn(1200)
    })
  }
}
</script>
<style lang="sass">
*
  box-sizing: border-box
body
  font-family: 'Montserrat', sans-serif
</style>
