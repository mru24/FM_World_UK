<template>
  <div class="content">
    <a href="http://www.joinforfree.me.uk" target="_blank" rel="noreferrer nofollow noopener">
      <img src="../assets/images/JoinUs.jpg" alt="">
    </a>
    <a href="http://www.beautywithme.co.uk" target="_blank" rel="noreferrer nofollow noopener">
      <img src="../assets/images/ShopOnline.jpg" alt="">
    </a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import 'config'

.content
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 80%
  height: 80%
  border: 5px solid #6c6c6c
  color: red
  a
    width: 100%
    background: rgba(#ffffff, 0.7)
    padding: 5px
    img
      display: block
      height: 50px
      margin: auto
      &:first-child
        margin-bottom: 10px
      @include bp-mobile
        height: 35px
        &:first-child
          margin: auto

</style>
