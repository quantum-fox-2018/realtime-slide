let vm = new Vue({
    el: "#app",
    data: {
        img: '',
        testVue: '',
        sokcet: '',
    },
    created: function(){
        window.addEventListener('keyup', this.getDirection);
        const socket = io("http://localhost:3000/");
        this.socket = socket
    },
    methods:{
        getDirection: function(event){
            let direction = event.key
            if(direction == 'ArrowUp'){
                this.img = 'img/16e80b37e20e777f003947806649fa67.jpg'
            }else if(direction == 'ArrowRight'){
                this.img = 'img/best-wallpaper-nature-background-full-hd-pics-backgrounds-of-smartphone.jpg'
            }else if(direction == 'ArrowDown'){
                this.img = 'img/nature-1209302_960_720.jpg'
            }else if(direction == 'ArrowLeft'){
                this.img = 'img/ogdefault.jpg'
            }
            // console.log(event.key, ' : ', this.img)
            this.sendToEveryone();
        },
        sendToEveryone: function(){
            console.log(this.img)
            this.socket.emit('send img url', this.img);
            this.socket.on('send img url', function(img){
                vm.setImg(img);
            })
        },
        setImg: function(img){
            console.log(img);
            this.img = img;
        }
    }
})