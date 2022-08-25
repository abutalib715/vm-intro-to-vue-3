app.component('review-list',{
    props:{
        reviews:{
            type: Array,
            requred: true
        }
    },
    template: 
    /**html */
    `<div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review,index) in reviews">
                {{ review.name }} gaves this {{ review.rating }} stars
                <br>
                {{ review.review }}
                <br>
                <span v-if="review.is_recommand=='yes'">He also recomanding this product. </span>
            </li>
        </ul>
    </div>`
})