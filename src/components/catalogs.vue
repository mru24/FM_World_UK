<template>
  <div>
    <h2>ONLINE CATALOGUES</h2>
    <div class="catalogContainer">
      <div class="catalog" v-for="(catalog, index) in catalogs" :key="index">
        <!-- catalog -->
        <a :href="catalog.link" target="_blank" rel="noreferrer nofollow noopener" @mouseenter="catalog.show=true" @mouseleave="catalog.show=false">
          <img :src="catalog.image" :alt="catalog.name + 'image'" class="img-fluid">
        </a>
        <transition>
          <div class="imageCover" v-if="catalog.show">
            <p>click to open</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      catalogs: [
        {
          name: 'Product Catalogue No.29 2018',
          link: 'http://online.fliphtml5.com/zehio/bqxb/',
          image: 'static/images/Catalogues/cat-1.jpg',
          show: false
        },
        {
          name: 'Discover the Beauty of Having Healthy Hair',
          link: 'http://online.fliphtml5.com/zehio/wlge/',
          image: 'static/images/Catalogues/cat-2.jpg',
          show: false
        },
        {
          name: 'Nutricode',
          link: 'http://online.fliphtml5.com/zehio/vrmi/',
          image: 'static/images/Catalogues/cat-3.jpg',
          show: false
        },
        {
          name: 'Frederico Mahora - La Collection Royale',
          link: 'http://online.fliphtml5.com/zehio/ibzg/',
          image: 'static/images/Catalogues/cat-4.jpg',
          show: false
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'

.catalogContainer
  background: #444
  margin: 40px 0
  padding: 20px
  display: flex
  flex-direction: row
  justify-content: center
  .catalog
    position: relative
    margin-right: 10px
    img
      display: block
      width: 100%
      max-width: 400px
    .imageCover
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      padding: 20px
      background: rgba(#f5f5f5, 0.8)
      pointer-events: none
      p
        width: 100%
        height: 100%
        border: $borderFt
        display: flex
        justify-content: center
        align-items: center

.v-enter-active
  animation: fadeIn .5s
.v-leave-active
  animation: fadeIn .3s reverse

@keyframes fadeIn
  from
    transform: scale(.1)
    opacity: .1
  to
    transform: scale(1)
    opacity: 1
</style>
