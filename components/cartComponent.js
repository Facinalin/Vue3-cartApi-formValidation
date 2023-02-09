

export default {
    props:['cartProduct','ifDiscount','setCartQty','deletePerCart','cartTotal','deleteAllCart','loadingStatus'],
    template:` 
    <div v-if="!cartProduct.length">購物車目前是空的！</div>
    <table v-else class="table align-middle">
    <thead>
      <tr>
        <th> </th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="perCart in cartProduct">
        <tr>
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="deletePerCart(perCart.id)">
              <i class="fas fa-spinner fa-pulse" v-if="loadingStatus.loadingItem == perCart.product.id"></i>
              x
            </button>
          </td>
          <td>
            <div class="text-info">
              {{ perCart.product.title }}  <span class="text-success">已套用優惠券</span>
            </div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <input 
                     min="1" type="number" class="form-control" :value="perCart.qty" @change="(evt) =>setCartQty(perCart, evt)" >
                <span class="input-group-text" id="basic-addon2"></span>
              </div>
            </div>
          </td>
          <td class="text-end">
            <small class="text-success">折扣價：</small>
            {{ perCart.total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end"> {{ cartTotal }} </td>
      </tr>
      <tr v-if="ifDiscount">
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success"> To Be Continued. </td>
      </tr>
    </tfoot>
  </table>
  <div class="text-end mb-5">
  <button class="btn btn-outline-danger" type="button" @click.prevent="deleteAllCart">清空購物車</button>
</div>`
}