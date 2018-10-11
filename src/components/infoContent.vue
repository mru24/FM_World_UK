<template>
  <div class="infoContainer">
    <div class="infoContent">
      <a href="http://www.joinforfree.me.uk" target="_blank" rel="noreferrer nofollow noopener">
        <img src="../assets/images/JoinUs.jpg" alt="">
      </a>
      <a href="http://www.beautywithme.co.uk" target="_blank" rel="noreferrer nofollow noopener">
        <img src="../assets/images/ShopOnline.jpg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import 'config'

.infoContainer
  width: 100%
  height: 100%
  padding: 30px
  .infoContent
    height: 100%
    padding: 20px 0
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    background: rgba(#ffffff, 0.9)
    border: 5px solid #6c6c6c
    a
      img
        display: block
        height: 50px
        margin: auto
        opacity: .9
        border-radius: 18px
        &:first-child
          margin-bottom: 10px
        @include bp-mobileSM
          height: 35px
          &:first-child
            margin: auto

</style>
