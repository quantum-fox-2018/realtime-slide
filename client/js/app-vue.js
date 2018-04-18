const socket = io('http://localhost:3000/')

let vue = new Vue ({
  el: '#app',
  data: {
    socket: null,
    hash: '',
    payload: '',
    ignore: false
  },
  methods: {
    slideChange: function () {
      this.hash = window.location.hash

      this.socket.emit('slide changed', {
        hash: this.hash
      })

      this.socket.on('navigate', (payload) => {
        this.payload = payload
        this.navigateSlide()
      })
    },
    navigateSlide: function () {
      let hash = this.payload.hash

      window.location.hash = hash
      this.ignore = true

      setInterval(function () {
        this.ignore = false
      }, 100)
    }
  },
  created: function () {
    this.socket = io('http://localhost:3000/')

    Reveal.initialize({
      hideAddressBar: true,
      backgroundTransition: 'fade',
      history: true
    })
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.slideChange()
    });
  }
})