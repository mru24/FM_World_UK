<template>
  <div>
    <div class="container">
      <div class="logo_image">
        <img src="../assets/images/FM_World_UK_logo.jpg" alt="FMWorld UK Logo" height="80">
      </div>
      <div class="navigation">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="nav_logo_image">
            <img src="../assets/images/FM_World_UK_logo.jpg" alt="FMWorld UK Logo" height="30">
          </div>

          <!-- <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"> -->
          <div class="navTrigger navbar-toggler ml-auto" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation" @click="toggleClass">
            <div class="icon" v-bind:class="{ active: isActive }">
              <div class="hamburger"></div>
            </div>
          </div>
            <!-- <span class="navbar-toggler-icon"></span> -->
          <!-- </button> -->

          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav mx-auto">
              <!-- <li class="nav-item">
                <a class="nav-link" href="#">SHOP ONLINE</a>
              </li> -->
              <li class="nav-item">
                <a class="nav-link" href="#">SMART START OFFER</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">YOUR LOCAL <img src="../assets/images/FMLogo_small.jpg" alt="FMWorld Logo Small" height="25"> CONSULTANT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">CUSTOMER LOGIN / REGISTRATION</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <h6>You are shopping with: <span>Katarzyna Kosmala</span></h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleClass: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'

.container
  font-weight: 400
  .logo_image
    margin: 30px 0
    @include bp-mobile
      display: none
  .navbar
    padding-left: 40px
    box-shadow: $shadowLt
    @include bp-mobile
      margin-top: 30px
      box-shadow: none
      border-top: $border
      border-bottom: $border
    .nav_logo_image
      display: none
      @include bp-mobile
        display: block
  ul
    width: 100%
    li
      display: flex
      align-items: center
      justify-content: center
      text-align: center
      width: 33%
      border-right: $border
      &:last-child
        border: none
      @include bp-mobile
        border: none
        width: 100%
        padding: 10px 0
        background: #eaecec
      img
        margin: 0 10px
h6
 margin-top: 10px
 font-weight: 200
 @include bp-mobile
   font-size: .7em
 span
   margin-left: 20px
   color: #ab0303
   font-weight: bold

// NAVBAR HAMBURGER STYLING
.icon
  width: 35px
  height: 35px
  background: transparent
  border-radius: 5px
  position: relative
  .hamburger
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)
    width: 100%
    height: 5px
    background: #aaa
    box-shadow: 0 2px 5px rgba(0,0,0,.2)
    transition: .5s
    &::before, &::after
      content: ''
      position: absolute
      width: 100%
      height: 5px
      background: #aaa
      box-shadow: 0 2px 5px rgba(0,0,0,.2)
      transition: .5s
    &::before
      top: -12px
    &::after
      top: 12px
  &:hover .hamburger, &:hover .hamburger::before, &:hover .hamburger::after
    background: #444
.icon.active
  .hamburger
    background: transparent
    box-shadow: 0 2px 5px transparent
.icon.active
  .hamburger::after, .hamburger::before
    top: 0
    background: red
.icon.active
  .hamburger::after
    transform: rotate(45deg)
  .hamburger::before
    transform: rotate(-225deg)
</style>
