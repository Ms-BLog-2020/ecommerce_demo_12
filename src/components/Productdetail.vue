<template>
    <div>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300&display=swap" rel="stylesheet">

        </head>

        <HomeNavbar />
        <loading :active.sync="isLoading"></loading>
        <div class="container main-contant mb-1">
            <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb bg-transparent pl-0 mt-2">
                <li class="breadcrumb-item">
                    <router-link to="/home" class="text-subLight">首頁</router-link>
                </li>
                <!-- <li class="breadcrumb-item">
                    <router-link to="/" class="text-white">{{product.category}}</router-link>
                </li> -->
                <li class="breadcrumb-item active text-subLight" aria-current="page">{{product.title}}</li>
            </ol>
            </nav>
            <div class="row">
                <div class="col-md-8">
                    <img :src="product.imageUrl" class="w-100" alt="">
                </div>
                <div class="col-md-4 mb-5">
                    <div class="sticky-top" style="top: 10px;">
                        <h1 class="h2 text-secondary pt-3">{{product.title}}</h1>
                        <p class="text-secondary">{{product.description}}</p>
                        <span class="tag bg-sub mt-4 ">{{product.category}}</span>
                        <div class="d-flex my-3 align-items-end justify-content-start mb-5">
                            <div class="h4 mb-0 mr-3 text-accent">
                                單價 {{product.price | currency }}
                            </div>
                            <del class="text-secondary">{{product.origin_price | currency}}</del>
                        </div>
                        <p class="card-text text-secondary mt-4">
                            {{product.content}}
                        </p>
                       
                        
                        
                        <select name="" class="form-control mr-1" id="" v-model="product.num">
                            <option v-for="num in 10" :value="num" :key="num">選購 {{num}} {{product.unit}}</option>
                        </select>
                        <div class="form-group mt-3" v-if="product.category ==='茶道體驗'">
                            <label for="due_date">預約體驗日期</label>
                            <input type="date" class="form-control" id="due_date"
                                v-model="product.due_date">
                        </div>
                        
                        <div class="h4 mt-3 text-accent text-right">
                            <span class="h6">總計 </span><strong>{{(product.price * product.num) | currency}}</strong>
                        </div>
                        <hr class="border-white my-4">
                        <div class="d-flex justify-content-between">
                            <router-link to="/home">
                                <button class="btn btn-outline-subLight">
                                <i class="fas fa-caret-left"></i> 回到商品區
                                </button>
                            </router-link>
                            
                            <button href="shoppingCart-checkout.html" class="btn btn-accent"
                                @click="addtoCart(product.id, product.num, product.due_date)" > 
                            <i class="fa fa-cart-plus" aria-hidden="true"></i> 加入購物車
                            </button>
                        </div>
                        <div class="d-flex justify-content-between">
                            <router-link to="/home_coupon">
                                <button class="btn btn-outline-subLight">
                                <i class="fas fa-caret-left"></i> 領取優惠券
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="nav nav-tabs mt-3" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="h6 nav-link active mb-0" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" v-if="product.category !=='茶道體驗'">
                商品規格
                </a>
                <a class="h6 nav-link active mb-0" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" v-if="product.category ==='茶道體驗'">
                活動特色
                </a>
            </li>
            <li class="nav-item">
                <a class="h6 nav-link mb-0" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" v-if="product.category !=='茶道體驗'">
                評價分享
                </a>
                <a class="h6 nav-link mb-0" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" v-if="product.category ==='茶道體驗'">
                體驗心得
                </a>
            </li>
            <li class="nav-item">
                <a class="h6 nav-link mb-0" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                貼心提醒
                </a>
            </li>
            
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active pt-3 pb-5" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div v-html="product.detail"></div>
                </div>
                <div class="tab-pane fade pt-3 pb-5" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div v-html="product.review"></div>
                </div>
                <div class="tab-pane fade pt-3 pb-5" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div v-html="product.reminder"></div>
                </div>
                
            </div>
            <ul class="nav nav-tabs mt-3" id="myTab" role="tablist" v-if="product.category !=='相關書籍'">
            <li class="nav-item">
                <a class="h6 nav-link active mb-0" id="record-tab" data-toggle="tab" href="#record" role="tab" aria-controls="record" aria-selected="true" v-if="product.category !=='茶道體驗'">
                商品開箱 Ⅰ
                </a>
                <a class="h6 nav-link active mb-0" id="record-tab" data-toggle="tab" href="#record" role="tab" aria-controls="record" aria-selected="true" v-if="product.category ==='茶道體驗'">
                活動花絮 Ⅰ
                </a>
            </li>
            <li class="nav-item">
                <a class="h6 nav-link mb-0" id="record-02-tab" data-toggle="tab" href="#record-02" role="tab" aria-controls="record-02" aria-selected="false" v-if="product.category !=='茶道體驗'">
                商品開箱 Ⅱ
                </a>
                <a class="h6 nav-link mb-0" id="record-02-tab" data-toggle="tab" href="#record-02" role="tab" aria-controls="record-02" aria-selected="false" v-if="product.category ==='茶道體驗'">
                活動花絮 Ⅱ
                </a>
            </li>
            <li class="nav-item">
                <a class="h6 nav-link mb-0" id="record-03-tab" data-toggle="tab" href="#record-03" role="tab" aria-controls="record-03" aria-selected="false" v-if="product.category !=='茶道體驗'">
                商品開箱 Ⅲ
                </a>
                <a class="h6 nav-link mb-0" id="record-03-tab" data-toggle="tab" href="#record-03" role="tab" aria-controls="record-03" aria-selected="false" v-if="product.category ==='茶道體驗'">
                活動花絮 Ⅲ
                </a>
            </li>
            
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active pt-3 pb-5" id="record" role="tabpanel" aria-labelledby="record-tab">
                <img :src="product.fn2Url" class="w-100 mb-3" alt="">
                <div v-html="product.imgText2"></div>
                
                </div>
                <div class="tab-pane fade pt-3 pb-5" id="record-02" role="tabpanel" aria-labelledby="record-02-tab">
                <img :src="product.fn3Url" class="w-100 mb-3" alt="">
                <div v-html="product.imgText3"></div>
                </div>
                <div class="tab-pane fade pt-3 pb-5" id="record-03" role="tabpanel" aria-labelledby="record-03-tab">
                <img :src="product.fn4Url" class="w-100 mb-3" alt="">
                <div v-html="product.imgText4"></div>
                </div>
                
            </div>
            
        </div>
        <HomeFooter />
        
        
        
    </div>
</template>

<script>
import HomeNavbar from './HomeNavbar';
import HomeFooter from './HomeFooter';

export default {
     components: {
        HomeNavbar,
        HomeFooter
  },
    data() {
        return {
            product: {
                due_date: 0, //把要新添的輸入功能定義資料 並在上方點選購物時 加到購物車內
            },
            isLoading: false,
            cart: {
               
            },
            prodId: '',
        }
    },
    methods: {
        getProduct(){
            const vm = this;
            console.log(vm.prodId)
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${vm.prodId}`;
            console.log(url)
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                // console.log(response);
                vm.product = response.data.product;
                vm.$set(vm.product, 'num', 1)
                vm.isLoading = false;
            });
        }, 
        addtoCart (id, qty = 1, due_date) { //將要輸入的資料置入 讓資料傳到購物車內
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this;
            vm.isLoading = true;
            const cart = {
                product_id: id,
                qty,
                due_date
            }
            this.$http.post(api, { data: cart }).then((response) => {
                // console.log(response.data)
                vm.$bus.$emit('cartRefresh');
                vm.$bus.$emit('message:push', response.data.message, 'success');
                vm.isLoading = false;
            })
        },
    },
    created(){
        this.prodId = this.$route.params.prodId;
        this.getProduct();
    },
}
</script>

<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
.tag {
  border-radius: 25px 25px 25px 25px;
  background-color: rgba(83, 71, 65, 1);
  color: #fff;
  padding: 2px 4px;
  font-size: 12px;
}
</style>