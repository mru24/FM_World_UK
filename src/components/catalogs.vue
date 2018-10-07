<template>
  <div>
    <h2>ONLINE CATALOGUES</h2>
    <div class="row my-5 p-4 border bg-dark">
      <div class="col-lg-2 offset-lg-2 bg-secondary">
        <a href="http://online.fliphtml5.com/zehio/bqxb/" target="_blank" rel="noreferrer nofollow noopener">
          <img src="../assets/images/cat-1.jpg" alt="" class="img-fluid">
          <div class="imageCover">click to open</div>
        </a>
      </div>
      <div class="col-lg-2 bg-secondary">
        <a href="http://online.fliphtml5.com/zehio/wlge/" target="_blank" rel="noreferrer nofollow noopener">
          <img src="../assets/images/cat-2.jpg" alt="" class="img-fluid">
          <div class="imageCover">click to open</div>
        </a>
      </div>
      <div class="col-lg-2 bg-secondary">
        <a href="http://online.fliphtml5.com/zehio/vrmi/" target="_blank" rel="noreferrer nofollow noopener">
          <img src="../assets/images/cat-3.jpg" alt="" class="img-fluid">
          <div class="imageCover">click to open</div>
        </a>
      </div>
      <div class="col-lg-2 bg-secondary">
        <a href="http://online.fliphtml5.com/zehio/ibzg/" target="_blank" rel="noreferrer nofollow noopener">
          <img src="../assets/images/cat-4.jpg" alt="" class="img-fluid">
          <div class="imageCover">click to open</div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import 'config'
img
  display: block
  margin: 10px auto
  width: 100%
  max-width: 400px
  position: relative
.imageCover
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)
  width: 10%
  height: 10%
  display: flex
  text-align: center
  align-items: center
  justify-content: center
  color: white
  background: rgba(#282828, 0.7)
  border: $borderFt
  opacity: 0
  transition: .5s
  pointer-events: none

img:hover ~ .imageCover
  width: 70%
  height: 80%
  opacity: 1
</style>
