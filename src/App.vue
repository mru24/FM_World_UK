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
    $('.image').mouseenter(function () {
      $('.mainImg', this).animate({opacity: 0.1})
      $('.info', this).animate({opacity: 1, width: '100%', height: '100%'})
    })
    $('.image').mouseleave(function () {
      $('.mainImg', this).animate({opacity: 1})
      $('.info', this).animate({opacity: 0, width: '10%', height: '10%'})
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
