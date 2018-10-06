<template>
  <div>
    <a href="https://www.facebook.com/katarzyna.jeziorna.1" target="_blank" rel="noreferrer nofollow noopener">
      <div class="fbImage">
        <div class="spinner"></div>
        <img src="../assets/images/facebook.png" alt="Facebook Icon">
      </div>
    </a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.fbImage
  width: 60px
  height: 60px
  margin: 10px auto
  border-radius: 50%
  position: relative
  .spinner
    display: none
    position: absolute
    top: 0
    left: 0
    z-index: 999
    width: 100%
    height: 100%
    &::before
      position: absolute
      top: 5px
      left: 5px
      width: 10px
      height: 10px
      border-radius: 50%
      background: yellow
      content: ''
  img
    width: 100%
    height: 100%
    transition: .2s

.fbImage:hover .spinner
  display: block
  animation: spinny 1.2s infinite
.fbImage:hover img
  opacity: .7

@keyframes spinny
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)
</style>
