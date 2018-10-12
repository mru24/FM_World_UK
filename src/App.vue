<template>
  <div id="app">
    <appHeader />
    <transition name="main">
      <router-view/>
    </transition>
    <back-to-top text="Back to top" visibleoffset="150"></back-to-top>
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
*
  box-sizing: border-box
body
  font-family: 'Montserrat', sans-serif

.main-enter-active
  animation: mainFadeIn 1s
.main-leave-active
  animation: mainFadeIn 1s reverse
@keyframes mainFadeIn
  from
    opacity: 0
  to
    opacity: 1
</style>
