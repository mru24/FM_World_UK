<template>
  <div>
    <div class="container">
      <div class="row p-4">
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <img src="../assets/images/fm_logo_white.jpg" alt="" style="width:100%;max-width:200px" class="mb-4">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <ul>
                <li data-toggle="modal" data-target="#Modal">
                  About Us
                </li>
                <li>
                  <a href="http://www.joinforfree.me.uk" target="_blank" rel="noreferrer nofollow noopener">
                    Join Us
                  </a>
                </li>
                <li>
                  <a href="https://fmworld.com/en/#page-world" target="_blank" rel="noreferrer nofollow noopener">
                    FM World Globally
                  </a>
                </li>
                <li>
                  <a href="https://fmworld.com/en/statics/terms-of-service-1/" target="_blank" rel="noreferrer nofollow noopener">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-3 offset-md-5 pt-5">
          <div class="text-center lead">
            Follow me:
            <facebook />
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="copyrights">
            Design and development: <a href="http://wwproject.eu" target="_blank" rel="noreferrer nofollow noopener">WWProject Studio &copy;2018</a>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="Modal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">About FM World</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p v-html="aboutUs" style="text-indent:30px;"></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
      aboutUs: 'FM World operates within the FMCG industry under the Multi-Level Marketing business model. The Mission of FM World is to deliver high quality products at attractive prices directly to households, excluding traditional retail networks. </p><p>FM World Poland was established in 2004 in Wrocław, Poland by Mr Artur Trawiński. Due to its dynamic growth, in 2007 a new company – FM World– was founded to expand the brand abroad.</p><p>Today FM World products are known and appreciated on six continents. Over 1,000,000 Business Partners cooperate with FM World and this number is continually growing. With a unique business model – network marketing, a type of direct selling – the company creates perfect conditions for the development of micro-enterprises; it provides opportunity, training and support.'
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  background: #2d2d2d
  color: #f5f5f5
  .copyrights
    $col: #555
    text-align: center
    margin-top: 40px
    color: $col
    a, a:active, a:visited
      color: $col + 15
ul
  list-style: none
  width: 100%
  li
    cursor: pointer
    margin-bottom: 10px
a, a:visited, a:active
  color: inherit
</style>
