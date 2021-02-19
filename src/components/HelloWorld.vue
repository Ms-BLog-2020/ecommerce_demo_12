
<template>
  <div>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>六角血拼賣賣</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
          crossorigin="anonymous">
        <link rel="stylesheet" href="custom.css">
        <!-- Bootstrap CSS 新增加的2020/10/28 -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap" rel="stylesheet">

      </head>

      <body>
        
            
            <HomeNavbar />
            
            <header class="jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-end" id="home">
              <div class="container-fluid">
              <div class="p-3 bg-lighter">
                  <h1 class="display-3">給自己品一杯茶的時間</h1>
                  <p class="lead">お茶を楽しむ時間をとってください</p>
              </div>
              <div class="row">
              <div class="col-md-12 p-0">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612841523098.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kGdbUubrC7OakiwvoIX84A5CmCu7zr4NRpFG1IUGK5C3iGJhbTP2E3b%2F%2Bnh9dufXE5Jb3J%2BdzIc%2BaD1FWf5WB7Wrn5RsQx0EYPWEQ0aZDqT%2F0pbjQdZKNSithKO7Xywp19tnXQxgPc1%2B3UrdpwKbjE1c1AGuAlh1X41CoIcdVArez0hbwCzMp9B5XlmxzxZ%2BQ6dSPfXmH5Az3aLHeTEjNGjK0sRuBKheaEH8CtaSUAa%2Fgz%2FWEvfpLXQHsFVy%2BjNtgm95Ckrv8fkzXzTBKcKn985sXK8n3POuZRw5SJydL8HzpFupexL42MthBZLiGi%2F8Ln0yfqilCb42Jqnxxklgzw%3D%3D" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                      <h2 class="pb-1">給自己品一杯茶的時間</h2>
                      <p class="pb-4 text-white-50">お茶を楽しむ時間をとってください</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612841611612.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YwqpA0oDPvsCE1TfPxiGyLog5kcQhNND6iW5ZYix%2BYlFsR9LcZDE3rcTnLdnVvf7BZPqoLy1DX94JkSYCoX7%2FjgQ5CTnb7aP0LEy60WfA%2BJ26npTd6Cle%2BkUPDzxXuwfCJKLfxtC%2FthAfPyoZB%2BQc3VQA0Yl2DVwGMV64el3DIIgPxyQHfWTj7PjCDOk95oVsKz34C0zFfkuGCjj1wEWWfPAJjPm9EZIGgqVz4gVZqtu%2FOy2N%2FX3AHfJXJ2vJdGXtzOXCvex5q6N00XHDJJv83rTGr6A%2BaESjeupXY4PztSvEBlIXh33g%2FLyiS%2BdOZ%2F77LJ%2FG1kF6GYLZyFz9i1bbg%3D%3D" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block">
                      <h2 class="pb-1">櫻花祭限定體驗活動開跑囉!</h2>
                      <p class="pb-2 text-white-50">さくらまつり限定体験イベント開始!</p>
                      <router-link id="homepage_to_eventpage" class="btn btn-white btn-animate mb-4" to="/event_page" tag="div">了解更多
                      </router-link>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612841678901.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fH0LIBlHlTFbdnAWBho1ew2E7b%2BWm2hDap099kRxkl9Vq81yTXZGBjimq9Mm4Vh%2BnPeoK99H2RhI8CZrqTY5wPJW4uZMC5rauG2XT6SJMMlUECCLa1NnpmaPGUz%2BOb%2FWCnygoxl4n94Wr0ROTlswajOdtAMZgOKstor8TFlU0q0iq4PlnX14hysOcmQCYC%2FcDuOAtIlR01oWXC5XQFnYZ3mfMWjAwztF25E911SFaxds5Wxwl3s%2BM9lk6z%2BarGa29ZxIpXR4q1vC405AiHV72ZyDsmbr6aavQiGT05FONhbIRcA6qJHMzG6gE%2By9Gq%2BvWi2S9aegkz6WeVsPuRa6Tg%3D%3D" alt="Third slide">
                    <div class="carousel-caption d-none d-md-block">
                      <h2 class="pb-1">飲茶有道，人生有味</h2>
                      <p class="pb-4 text-white-50">お茶はいい、人生はいい</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
              </div>
            </header>

           
            <div class="container main-contant mb-1">
              <div class="row">
                <div class="col-md-12">
                  <Homesidebar></Homesidebar>
                </div>
                <div class="col-md-12">
                  <router-view></router-view>
                </div>
              </div>
            </div>
            <HomeFooter />

            <div class="modal fade" id="removeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">刪除商品</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>是否確認刪除商品</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">否</button>
                    <button type="button" class="btn btn-outline-danger px-5">是</button>
                  </div>
                </div>
              </div>
            </div>
      </body>

    </div>
  </template>
  
  

  
<script type="application/javascript">

import $ from 'jquery'; //載入modal
import Homesidebar from './Homesidebar';
import HomeNavbar from './HomeNavbar';
import HomeFooter from './HomeFooter';

// $('.dropdown-toggle').dropdown();

$(window).scroll(function(evt){
  if($(window).scrollTop()>0)
  $(".navbar").removeClass("navbar-top");
  else
  $(".navbar").addClass("navbar-top")
  
});




export default {
  components: {
        HomeNavbar,
        Homesidebar,
        HomeFooter
  },
  mounted(){
      $(document).ready(function () {
      $('#removeModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
        var title = button.data('title') // 使用 data-* 來取得特定內容

        var modal = $(this)
        modal.find('.modal-title').text('確認' + title) // 寫入資料
      })
    });
  },
  data() {
    return {
      products: [],
      product: {}, //存放查看更多的Modal資料
      isLoading: false,
      status: {
        loadingItem: '', //存放產品id
      },
      cart: {},
      form: { //結構直接參考api設定的資料結構 存放顧客填寫的個人資料
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: ''
      }
    }
  },
  methods: {
    getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.products = response.data.products;
        console.log(response);
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.isLoading = true;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product; //先讀取完資料後
        $('#productModal').modal('show'); //再將Modal打開
        console.log(response);
        vm.isLoading = false;  
        vm.status.loadingItem = ''; //Modal打開後將值替換成空的
      });
    },
    addtoCart(id,qty=1){ //ES6 預設值設定方法 qty=1
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = { //定義資料結構
        product_id: id,
        qty,
      };
      this.$http.post(url, {data: cart}).then((response) => {
        console.log(response);
        vm.status.loadingItem = ''; //Modal打開後將值替換成空的
        vm.getCart(); //把購物車取得回來
        $('#productModal').modal('hide'); //加到購物車後關掉Modal
      });
    },
    getCart(){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.cart= response.data.data;
        console.log(response);
        vm.isLoading = false;
      });
    },
    deleteCart(id){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then((response) => {
         vm.getCart(); //這部我會忘記做 >> 刪除後重新取得購物車
        console.log(response);
        vm.isLoading = false;
    });
    },
    createOrder(){ //到上方綁定 >> @submit.prevent="createOrder"
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form; //這部會忘記做
      // vm.isLoading = true;
      this.$validator.validate().then((result)=>{
        if (result){
            this.$http.post(url,{data:order}).then((response) => {
            // vm.getCart(); 
            console.log('訂單已建立',response);
            // vm.isLoading = false;
          })
          }
          else{
            console.log('欄位不完整');
          }
      
      
    });
    },
  },
  created() { //取得資料要在這邊設定
    this.getProducts();
    this.getCart(); //把購物車取得回來
  },
};


     
  </script>

  <style>
  * {
    font-family: 'Noto Serif JP','Noto Serif TC'
  }
  

  header#home.jumbotron {
    text-align: center;
    background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612841523098.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kGdbUubrC7OakiwvoIX84A5CmCu7zr4NRpFG1IUGK5C3iGJhbTP2E3b%2F%2Bnh9dufXE5Jb3J%2BdzIc%2BaD1FWf5WB7Wrn5RsQx0EYPWEQ0aZDqT%2F0pbjQdZKNSithKO7Xywp19tnXQxgPc1%2B3UrdpwKbjE1c1AGuAlh1X41CoIcdVArez0hbwCzMp9B5XlmxzxZ%2BQ6dSPfXmH5Az3aLHeTEjNGjK0sRuBKheaEH8CtaSUAa%2Fgz%2FWEvfpLXQHsFVy%2BjNtgm95Ckrv8fkzXzTBKcKn985sXK8n3POuZRw5SJydL8HzpFupexL42MthBZLiGi%2F8Ln0yfqilCb42Jqnxxklgzw%3D%3D");
    background-size: cover;
    margin-bottom: 0px;
    padding: 0px;
    max-height: 520px;
  }
  header#home.jumbotron h4 {
    opacity: 0.6;
    font-weight: normal;
  }
  header#home.jumbotron hr {
    max-width: 60px;
  }
  header#home.jumbotron .container {
    color: white;
    padding: 200px 0px;
    
  }
  section.button{
    padding-top: 30px;
  }
  .col-category {
    padding: 0px;
    display: inline-block;
  }
  .col-category .line {
    height: 1px;
    width: 100%;
    background-color: gray;
    transition-duration: 0.3s;
  }
  .col-category h4 {
    padding-bottom: 10px;
  }
  .col-category:hover h4 {
    color: green;
  }
  .col-category:hover .line {
    background-color: green;
    height: 5px;
  }
  section.button.sticky-top {
    text-align: center;
    padding: 30px 80px;
  }
  #homepage_to_eventpage {
      font-size: 16px;
      letter-spacing: 5px;
      padding: 5px 30px;
      border-radius: 100px;
      cursor: pointer;
  }
  .btn#homepage_to_eventpage:link,
  .btn#homepage_to_eventpage:visited {
      text-transform: uppercase;
      text-decoration: none;
      padding: 0px 40px;
      display: inline-block;
      border-radius: 100px;
      transition: all 0.2s;
      position: absolute;
      cursor: pointer;
  }

  .btn#homepage_to_eventpage:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .btn#homepage_to_eventpage:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .btn-white#homepage_to_eventpage {
  background-color: #fff;
  color: #777;
  }

  

  .btn-white#homepage_to_eventpage::after {
  background-color: #fff;
  }

  .btn#homepage_to_eventpage:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
  }

  .btn-animated#homepage_to_eventpage {
  -webkit-animation: moveInBottom 5s ease-out;
          animation: moveInBottom 5s ease-out;
  -webkit-animation-fill-mode: backwards;
          animation-fill-mode: backwards;
  }

  @-webkit-keyframes moveInBottom {
  0% {
      opacity: 0;
      transform: translateY(30px);
  }
  100% {
      opacity: 1;
      transform: translateY(0px);
  }
  }

  @keyframes moveInBottom {
  0% {
      opacity: 0;
      transform: translateY(30px);
  }
  100% {
      opacity: 1;
      transform: translateY(0px);
  }
  }
@media screen and (max-width: 768px) {
  header#home.jumbotron {
    background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612841523098.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kGdbUubrC7OakiwvoIX84A5CmCu7zr4NRpFG1IUGK5C3iGJhbTP2E3b%2F%2Bnh9dufXE5Jb3J%2BdzIc%2BaD1FWf5WB7Wrn5RsQx0EYPWEQ0aZDqT%2F0pbjQdZKNSithKO7Xywp19tnXQxgPc1%2B3UrdpwKbjE1c1AGuAlh1X41CoIcdVArez0hbwCzMp9B5XlmxzxZ%2BQ6dSPfXmH5Az3aLHeTEjNGjK0sRuBKheaEH8CtaSUAa%2Fgz%2FWEvfpLXQHsFVy%2BjNtgm95Ckrv8fkzXzTBKcKn985sXK8n3POuZRw5SJydL8HzpFupexL42MthBZLiGi%2F8Ln0yfqilCb42Jqnxxklgzw%3D%3D");
    max-height: 150px;
  }
  section.button.sticky-top {
    text-align: center;
    padding: 30px 80px;
  }
}

  </style>





