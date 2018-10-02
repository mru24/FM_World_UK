<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-4">
          <div class="image">
            <img class="mainImg" src="../assets/images/Fragrances_resize.jpg" alt="" width="100%">
            <div class="info">
              <infoContent />
            </div>
          </div>
        </div>
        <div class="col-lg-6 my-4">
          <div class="image">
            <img class="mainImg" src="../assets/images/FaceAndBody_Care_resize.jpg" alt="" width="100%">
            <div class="info">
              <infoContent />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 my-4">
          <div class="image">
            <img class="mainImg" src="../assets/images/Makeup_resize.jpg" alt="" width="100%">
            <div class="info">
              <infoContent />
            </div>
          </div>
        </div>
        <div class="col-lg-6 my-4">
          <div class="image">
            <img class="mainImg" src="../assets/images/Nutricode_resize.jpg" alt="" width="100%">
            <div class="info">
              <infoContent />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 my-4">
          <div class="image">
            <img class="mainImg" src="../assets/images/SmartAndClean_resize.jpg" alt="" width="100%">
            <div class="info">
              <infoContent />
            </div>
          </div>
        </div>
        <div class="col-lg-6 my-4">
          <div class="image">
            <img class="mainImg" src="../assets/images/Aurile_resize.jpg" alt="" width="100%">
            <div class="info">
              <infoContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import infoContent from './infoContent'
export default {
  components: {
    infoContent
  },
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(() => {
      $('body').hide()
      $('body').fadeIn(1200)
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
<style lang="sass" scoped>
.image
  position: relative
  img
  .info
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 10%
    height: 10%
    display: flex
    justify-content: center
    align-items: center
    opacity: 0
</style>
