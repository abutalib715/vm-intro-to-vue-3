const app = Vue.createApp({
    data() {
        return {
            product: 'Boots',
            description: 'Product short description for test',
            image: './assets/images/socks_green.jpg',
            url: 'http://google.com',
            inStock: false,
            inventory: 8,
            onSale: true,
            details: [
                '50% cotton','20% wool', '30% silk'
            ],
            variants: [
                {id: 2233, color:'green', image: './assets/images/socks_green.jpg'},
                {id: 2234, color:'blue', image: './assets/images/socks_blue.jpg'}
            ],
            sizes: [30,32,34,36,41,40],
            cart: 0

        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            if(this.cart > 0)
                this.cart--
        },
        updateImage(image){
            this.image = image
        }
    }
})