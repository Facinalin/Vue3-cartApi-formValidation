//新的一筆訂單成立post：/v2/api/{api_path}/order
export default {
    data(){
      return{
        data:{
            user:{}
        },
        apiUrl: 'https://vue3-course-api.hexschool.io/v2',
        apiPath: 'lk1025cina',
        message:''
      }
    },
    methods:{
      phoneVali(value){
        const phoneNumber = /^(09)[0-9]{8}$/
        return phoneNumber.test(value) ? true : '請填入正確的電話號碼！'
      },
      cartToOrder(){
      const url = `${this.apiUrl}/api/${this.apiPath}/order`;
      console.log(this.data);
      axios.post(url,this.data)
      .then(res=>{
        console.log(res.data);
        alert('訂單資料格式正確')
      })
      .catch(err=>{
        console.log(err.data);
      })
    
      }
    },
    template:` <div class="my-5 row justify-content-center">
    <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="cartToOrder">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <v-field id="email" name="email" type="email" class="form-control"
                  placeholder="請輸入 Email" :class="{ 'is-invalid': errors['email'] }" rules="email|required"
                  v-model="data.user.email"
                ></v-field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <v-field id="name" name="name" type="text" class="form-control"
                 placeholder="請輸入姓名" rules="required" :class="{ 'is-invalid': errors['name'] }"
                 v-model="data.user.name"></v-field>
        <error-message name="name" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <v-field id="tel" name="電話" type="tel" class="form-control" 
                 placeholder="請輸入電話" v-model="data.user.tel" :class="{ 'is-invalid': errors['name'] }" :rules="phoneVali"></v-field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <v-field id="address" name="address" type="text" class="form-control"
                 placeholder="請輸入地址" rules="required" :class="{ 'is-invalid': errors['address'] }"
                 v-model="data.user.address"></v-field>
        <error-message name="address" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea id="message" class="form-control" cols="30" rows="10" v-model="data.message"></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </v-form>
  </div>`
}