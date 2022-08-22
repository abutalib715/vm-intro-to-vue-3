const app = Vue.createApp({
    data() {
        return {
            product: 'Boots',
            description: 'Product short description for test',
            image: './assets/images/socks_green.jpg',
            url: 'http://google.com',
            inStock: false,
            inventory: 8,
            onSale: true
        }
    }
})