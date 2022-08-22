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
                {id: 2233, color:'green'},
                {id: 2234, color:'red'}
            ],
            sizes: [30,32,34,36,41,40]

        }
    }
})