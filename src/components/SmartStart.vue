<template>
  <div>
    <div class="container">
      <h4 class="mt-5">FIRST 10 DAYS OFFER</h4>
      <div class="row my-5">
        <div class="col-lg-4" v-for="image in images" :key="image">
          <img v-bind:src="image" alt="Offer Image" class="img-fluid mainImg" data-toggle="modal" data-target="#imgModal" @click="showInModal(image)">
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
.mainImg
  transition: .2s
  cursor: pointer
  &:hover
    opacity: .7
</style>
