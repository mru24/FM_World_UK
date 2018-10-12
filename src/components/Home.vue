<template>
  <div>
    <div class="container">
      <div class="categories">
        <div class="box" v-for="(cat, index) in categories" :key="index">
          <div class="image" @mouseenter="cat.show=true" @mouseleave="cat.show=false">
            <img class="mainImg" :src="cat.image" :alt="cat.name + 'image'" width="100%">
            <transition>
              <div class="info" v-if="cat.show">
                <infoContent />
              </div>
            </transition>
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
          image: 'static/images/Categories/Fragrances_resize.jpg',
          show: false
        },
        {
          name: 'Face And Body Care',
          image: 'static/images/Categories/FaceAndBody_Care_resize.jpg',
          show: false
        },
        {
          name: 'Make Up',
          image: 'static/images/Categories/Makeup_resize.jpg',
          show: false
        },
        {
          name: 'Nutricode',
          image: 'static/images/Categories/Nutricode_resize.jpg',
          show: false
        },
        {
          name: 'Smart And Clean',
          image: 'static/images/Categories/SmartAndClean_resize.jpg',
          show: false
        },
        {
          name: 'Aurile',
          image: 'static/images/Categories/Aurile_resize.jpg',
          show: false
        }
      ]
    }
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
          transition: .6s
        .info
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .image:hover img
        opacity: 0.1

.v-enter-active
  animation: fadeIn .5s
.v-leave-active
  animation: fadeIn .3s reverse

@keyframes fadeIn
  from
    opacity: 0
    transform: scale(.1)
  to
    opacity: 1
    transform: scale(1)

</style>
