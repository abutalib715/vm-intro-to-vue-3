const app = Vue.createApp({
    data() {
        return {
            cart: [],
            isPremium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeFromCart(){
            this.cart.shift()
        }
    }
})