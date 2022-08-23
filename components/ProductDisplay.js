app.component('product-display', {
    props: {
        premium:{
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" :class="{ 'out-of-stock-img': !inStock }" alt="">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10">Almost out of Stock</p>
                <p v-else>Out of Stock</p>
                <p v-if="onSale">On Sale</p>
                <p>Shipping: {{ shipping }}</p>
                <product-details :details="details"></product-details>
                <div 
                    v-for="(variant,index) in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)"
                    class="color-circle" :style="{ backgroundColor:variant.color }">
                </div>

                <!-- <ul>
                <li v-for="size in sizes" :key="size">{{ size }}</li>
                </ul> -->

                <button class="button" @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to cart</button>
                <button v-if="cart > 0" class="button" @click="removeFromCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Remove from cart</button>
            
            </div>
        </div>
    </div>`,
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
        },
        shipping(){
            if(this.premium)
                return 'Free';
            else 
                return 2.55
        }
    }
})