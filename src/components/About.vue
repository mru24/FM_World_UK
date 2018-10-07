<template>
  <div>
    <div class="container">
      <h4 class="mt-5">About Me</h4>
      <div class="content">
        <div class="row my-5">
          <div class="col-lg-8 p-4 infoText order-lg-last">
            <p class="lead">
              Hi, my name is Katarzyna Kosmala.
            </p>
            <p>
              I am mother with 3 lovely children. I have been cooperating with FMWorld for 3 yeares and my life has changed immensely since. I became self confident, may work from home and be with my kids when they need me.<br>
              My main goal is help people to change their life for the better.<br>
              I like reading books and walk.
            </p>
            <div class="row align-items-center mt-5">
              <div class="col-sm-3 offset-sm-2 lead">
                Follow me:
              </div>
              <div class="col-sm-1">
                <facebook />
              </div>
            </div>
          </div>
          <div class="col-lg-3 offset-lg-1 my-2">
            <div class="imageContainer">
              <img v-for="(image, index) in images" :key="index" :src="image.imageSrc" :alt="image.alt" data-toggle="modal" data-target="#imgModal1" class="mb-2 img-fluid mainImg" @click="showInModal(image.imageLg, image.alt)">
            </div>
          </div>
        </div>
        <div class="row my-5">

        </div>
      </div>
    </div>

    <div class="modal fade" id="imgModal1" tabindex="-1" role="dialog" aria-labelledby="imgModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header" v-if="selectedImage">
            <h5 class="modal-title lead" id="exampleModalLabel">{{ selectedAlt }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style="font-size:40px;color:darkred;">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="selectedImage" :alt="selectedAlt" width="100%">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import facebook from './facebook'
export default {
  components: {
    facebook
  },
  data () {
    return {
      selectedImage: null,
      selectedAlt: null,
      images: [
        {imageSrc: 'static/images/me-1_crop.jpg', alt: 'Me at work', imageLg: 'static/images/me-1.jpg'},
        {imageSrc: 'static/images/me-2.jpg', alt: 'My lovely babies', imageLg: 'static/images/me-2.jpg'}
      ]
    }
  },
  methods: {
    showInModal (image, alt) {
      this.selectedImage = image
      this.selectedAlt = alt
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'config'
.imageContainer
  .mainImg
    display: block
    width: 100%
    max-width: 300px
    margin: auto
    border-radius: 10px
    cursor: pointer
    transition: .2s
    &:hover
      opacity: .7

.infoText
  display: flex
  flex-direction: column
  justify-content: center
</style>
