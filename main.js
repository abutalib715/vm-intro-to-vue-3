const app = Vue.createApp({
    data() {
        return {
            product: 'Boots',
            brand: 'Apex',
            description: 'Product short description for test',
            selectedVariant: 0,
            url: 'http://google.com',
            inventory: 8,
            details: [
                '50% cotton','20% wool', '30% silk'
            ],
            variants: [
                {id: 2233, color:'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true},
                {id: 2234, color:'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false}
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
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title(){
            return this.product + ' - ' + this.brand
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        onSale(){
            return this.variants[this.selectedVariant].onSale
        }
    }
})