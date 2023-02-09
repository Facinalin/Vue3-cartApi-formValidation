//加入購物車用下拉選項：防止用戶輸入不符合格式的input！！

export default {
    data(){
    return {
      qty:1
    }
    },
    props:['perProduct','addToCart'],
    template:`
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>{{ perProduct.title }}</span>
          </h5>
            <button type="button" class="btn-close"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-6">
                <img class="img-fluid perProductPic" :src="perProduct.imageUrl" alt="">
          </div>
              <div class="col-sm-6 justify-content-between">
                <span class="badge bg-primary rounded-pill mb-4">{{ perProduct.category }}</span>
                <div class="mb-5">
                <p class="px-3">商品描述：{{ perProduct.description }}</p>
                <p class="px-3">商品內容：{{ perProduct.content }}</p>
                </div>
                <del class="h6 mt-3">原價 {{ perProduct.origin_price }} 元</del>
                <div class="h5">現在只要 {{ perProduct.price }} 元</div>
                <div>
                  <div class="input-group">
                    <select name="" id="" class="form-select" v-model="qty">
                    <option :value="i" v-for="i in 10" :key="i">{{ i }}</option>
                    </select>
                    <button type="button" class="btn btn-primary" @click="addToCart(perProduct.id,qty)">加入購物車</button>
          </div>
          </div>
          </div>
              <!-- col-sm-6 end -->
          </div>
          </div>
          </div>
          </div>`
}