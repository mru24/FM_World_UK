<template>
  <div>
    <div class="container">
      <div class="categories">
        <div class="box" v-for="(cat, index) in categories" :key="index">
          <div class="image" @mouseenter="cat.show=true" @mouseleave="cat.show=false">
            <img class="mainImg" :src="cat.image" :alt="cat.name + 'image'" width="100%">
            <div v-if="cat.show">
              <transition name="showinfo">
                <div class="info">
                  <infoContent />
                </div>
              </transition>
            </div>

          </div>
        </div>
      </div>
      <animals />
      <hr>
      <catalogs />
    </div>
  </div>
</template>
<script>
import infoContent from './infoContent'
import animals from './animals'
import catalogs from './catalogs'

export default {
  components: {
    infoContent,
    animals,
    catalogs
  },
  data () {
    return {
      show: false,
      categories: [
        {
          name: 'Fragrances',
          image: 'static/images/Cat/Fragrances_resize.jpg',
          show: false
        },
        {
          name: 'Face And Body Care',
          image: 'static/images/Cat/FaceAndBody_Care_resize.jpg',
          show: false
        },
        {
          name: 'Make Up',
          image: 'static/images/Cat/Makeup_resize.jpg',
          show: false
        },
        {
          name: 'Nutricode',
          image: 'static/images/Cat/Nutricode_resize.jpg',
          show: false
        },
        {
          name: 'Smart And Clean',
          image: 'static/images/Cat/SmartAndClean_resize.jpg',
          show: false
        },
        {
          name: 'Aurile',
          image: 'static/images/Cat/Aurile_resize.jpg',
          show: false
        }
      ]
    }
  },
  mounted () {
    // $('.image').mouseenter(function () {
    //   $('.mainImg', this).animate({opacity: 0.1})
    //   $('.info', this).animate({opacity: 1, width: '100%', height: '100%'})
    // })
    // $('.image').mouseleave(function () {
    //   $('.mainImg', this).animate({opacity: 1})
    //   $('.info', this).animate({opacity: 0, width: '10%', height: '10%'})
    // })
  }
}
</script>
<style lang="sass" scoped>
@import 'config'

.container
  .categories
    margin: 40px 0
    display: grid
    grid-template-columns: auto auto
    grid-gap: 10px
    @include bp-mobile
      grid-template-columns: auto
    .box
      position: relative
      .image
        img
          transition: .4s
        .info
          position: absolute
          top: 0
          left: 0
          transform: scale(0.1)
          width: 100%
          height: 100%
          opacity: 1
      .image:hover img
        opacity: 0.1

.showinfo-enter-active
  opacity: 1
  transform: scale(1)

</style>
