<template>


  <div class="container">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"  data-interval="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://www.wanderingrosetravels.com/wp-content/uploads/2018/04/san-francisco-alcatraz-island-prison-tours-image.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100"  src="https://blog.tripcreator.com/wp-content/uploads/2016/07/florence-1300x600.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="http://www.hotelthailand.com/assets/contents/popular-destinations/krabi.jpg" alt="Third slide">
        </div>
      </div>
      <div class="corousel">
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" @click="prev_slide()">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only" id="previous">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" @click="next_slide()">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      socket: '',
    }
  },
  methods: {
    next_slide () {

      this.socket.emit('next slide')
      this.socket.on('next slide', () => {
          console.log('kanan')
          $('#carouselExampleControls').carousel('next')
      })
      
    },
    prev_slide () {
      this.socket.emit('prev slide')
      this.socket.on('prev slide', () => {
          console.log('kiri')
          $('#carouselExampleControls').carousel('prev')
      })
    },
    save_socket () {  
      this.socket = io('http://localhost:3000')
    }
  },
  created: function () {
    this.save_socket()
  }
}
</script>

<style>

</style>

