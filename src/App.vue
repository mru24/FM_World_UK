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
  }
}
</script>
<style lang="sass">
  body
    font-family: 'Montserrat', sans-serif
</style>
