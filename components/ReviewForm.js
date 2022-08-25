app.component('review-form',{
    template: 
        /*html */
        `<form class="review-form" @submit.prevent="submitReview">
          <h3>Leave a Review</h3>
          <label for="name">Name:</label>
          <input id="name" v-model="name">
          
          <label for="review">Review:</label>
          <textarea id="review" v-model="review"></textarea>
          
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
    
          <label for="name">Would you recomand this product?</label>
          <input type="radio" id="is_recommand" v-model="is_recommand" value="yes">Yes
          <input type="radio" id="is_recommand" v-model="is_recommand" value="no">No

          <input type="submit" class="button" value="Submit">
        </form>`,
        data(){
            return {
                name: '',
                review: '',
                rating: null,
                is_recommand:''
            }
        },
        methods: {
            submitReview(){
                if(this.name === '' ||this.review === '' ||this.rating === ''){
                    alert('Please fill up the full form');
                    return
                }

                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    is_recommand: this.is_recommand,
                }

                this.$emit('review-submitted', productReview)

                this.name = ''
                this.review = ''
                this.rating = null
                this.is_recommand = ''
            }
        }
    
})