<template>
  <div class="content">
    <ul>
      <li>
        <a href="http://www.joinforfree.me.uk" target="_blank" rel="noreferrer nofollow noopener">
          <div class="content_joinus_img"></div>
        </a>
      </li>
      <li>
        <a href="http://www.beautywithme.co.uk" target="_blank" rel="noreferrer nofollow noopener">
          <div class="content_shoponline_img"></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.content
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 80%
  height: 80%
  border: 5px solid red
  color: red
  ul
    width: 100%
    list-style: none
    background: white
    padding: 10px
    li
      height: 60px
      a
        background: green
        .content_joinus_img
          height: 100%
          background-image: url('../../static/images/JoinUs.jpg')
          background-position: center
          background-repeat: no-repeat
          background-size: contain
          margin-bottom: 10px
        .content_shoponline_img
          height: 100%
          background-image: url('../../static/images/ShopOnline.jpg')
          background-position: center
          background-repeat: no-repeat
          background-size: contain
</style>
