app.component('product-display', {
    props: {
        premium:{
            type: Boolean,
            required: true
        },
        cart_length:{
            type:Number,
            required:true
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
                <button v-if="cart_length > 0" class="button" @click="removeFromCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Remove from cart</button>
            
            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Apex',
            selectedVariant: 0,
            inventory: 8,
            details: [
                '50% cotton','20% wool', '30% silk'
            ],
            variants: [
                {id: 2233, color:'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true},
                {id: 2234, color:'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false}
            ],
            sizes: [30,32,34,36,41,40],
            cart: 0,
            reviews: []
        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart(){
            this.$emit('remove-from-cart')
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        addReview(review){
            this.reviews.push(review)
            console.log(this.reviews)
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