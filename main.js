const app = Vue.createApp({
    data() {
        return {
            cart: [],
            isPremium: true,
            description: 'Product short description for test',
            url: 'http://google.com',
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeFromCart(){
            this.cart.shift()
        },
    }
})