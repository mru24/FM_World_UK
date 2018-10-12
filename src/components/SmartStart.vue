<template>
  <div>
    <div class="container">
      <h4 class="mt-5">SMART START OFFERS</h4>
      <div class="row my-5">
        <div class="col-lg-4" v-for="(image, index) in images" :key="index">
          <div class="imageContainer">
            <img v-bind:src="image" alt="Offer Image" class="img-fluid mainImg" data-toggle="modal" data-target="#imgModal" @click="showInModal(image)">
            <div class="imageCover">
                <h5 class="lead">click to enlarge</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="imgModal" tabindex="-1" role="dialog" aria-labelledby="imgModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <h5 class="modal-title" id="exampleModalLabel">Some text.</h5> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style="font-size:40px;color:darkred;">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="selectedImage">
            <img v-bind:src="selectedImage" alt="" class="img-fluid">
          </div>
          <div class="modal-footer">
            <!-- Some text. -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedImage: null,
      images: [
        'static/images/offer-1.jpg',
        'static/images/offer-2.jpg',
        'static/images/offer-3.jpg'
      ]
    }
  },
  methods: {
    showInModal (image) {
      this.selectedImage = image
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'
.imageContainer
  .mainImg
    margin: 10px auto
    transition: .4s
    cursor: pointer
    border: $borderLt
    position: relative
    &:hover
      opacity: .6
  .imageCover
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%) scale(.1)
    width: 70%
    height: 70%
    pointer-events: none
    background: rgba(#ffffff, 0.95)
    border: $borderFt
    opacity: 0
    transition: .5s
    display: flex
    justify-content: center
    align-items: center
    color: black

.imageContainer:hover .imageCover
  transform: translate(-50%,-50%) scale(1)
  opacity: 1

</style>
