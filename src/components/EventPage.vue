<template>
    <div>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300&display=swap" rel="stylesheet">

        </head>
        <loading :active.sync="isLoading"></loading>
        <header id="event_page">
            
            <div class="container-fluid" id="event_page_container">
                <div class="event_img event_sakura a">
                <router-link to="/home" tag="div">
                <div class="logo"></div>
                </router-link>
                <h1 class="event_title event_title_sakura" id="event">櫻花祭<br/>限定<br/>品茶活動</h1>
                </div>
                <div class="event_img event_time b">
                <h3 class="event_title event_time_title" id="event">品茶活動時間</h3>
                <div class="time time_01"><i class="fa fa-caret-right" id="event"></i>
                    <p class="time_text" id="event">櫻花初開季 2021/1/16 - 2021/2/1</p>
                </div>
                <div class="time time_02"> <i class="fa fa-caret-right" id="event"> </i>
                    <p class="time_text" id="event">櫻花盛放季 2021/2/2 - 2021/2/28</p>
                </div>
                <div class="time time_03"><i class="fa fa-caret-right" id="event"></i>
                    <p class="time_text" id="event">櫻花收尾季 2021/3/1 - 2021/3/7</p>
                </div>
                </div>
                <div class="event_img event_top c">
                <h3 class="event_title class_title" id="event">茶道體驗<br/>工作坊</h3>
                <p class="class_intro" id="event">茶道精神與背後的文化之美是什麼? 想體驗茶道文化的人，絕對不能錯過這堂茶道體驗工作坊，從文化精神到實際體驗泡茶通通都包含在工作坊中囉!</p>
                </div>
                <div class="event_img event_middle d">
                    <h3 class="event_title class_title" id="event">午後<br/>品茶課</h3>
                    <p class="class_intro" id="event">茶道也有家常式的品茶之道，<br/>體驗在家也能自己泡茶的茶道吧!</p>
                </div>
                <div class="event_img event_bottom e">
                    <h3 class="event_title class_title" id="event">茶道入門<br/>工作坊</h3>
                    <p class="class_intro" id="event">從基礎的茶道基本知識到春、夏、秋、冬四季不同的茶道流程，通通都在這堂課教你。</p>
                </div>
                <div class="event_img event_rigister f">
                    <h3 class="event_title register_title" id="event">品茶活動<br/>優惠</h3>
                    <p class="register_intro" id="event">心動不如馬上行動!<br/>想體驗正統茶道, 立即報名即可享受!!<br/>把握限定在櫻花季開放的品茶體驗活動吧!!</p>
                    <router-link to="/home_coupon" tag="div">
                    <button class="btn-outline-light register">
                    馬上領取優惠
                    </button>
                    </router-link>
                </div>
                <div class="event_img event_record g">
                <h3 class="event_title record_title" id="event">品茶活動<br/>花絮</h3>
                <div id="myEvent" class="video-background-eventpage-top">
                <div class="video-foreground-eventpage-top">
                    <iframe src="https://www.youtube.com/embed/hLMUfLl0Mbc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" frameborder="0" allowfullscreen></iframe>
                </div>
                </div>
                </div>
            </div>
            </header>
            
            <section id="event_intro">
            <section id="video">
                <div class="video-background-eventpage-bottom">
                <div class="video-foreground-eventpage-bottom">
                    <iframe src="https://www.youtube.com/embed/wzVmMojTq0o?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" frameborder="0" allowfullscreen></iframe>
                </div>
                </div>
            </section>
            <div class="container-fluid" id="event_page_container">
                <div class="row" id="event_page">
                
                    <div class="col-md-4 event_intro" id="event">
                    <img class="people" id="logo_event_intro" src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612842504340.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aqbgtN8a3nkkFRQmgFR2iK9K7haUT8whPBEJgkGr5S4Ph1P8BtLXtJt8ln1FcB5BAkz9MLuWNZ9qw8410yA4KVWjx3LmtJo4%2BZbml3%2BWbv2rQhg4Gy7jyKlbDpQMQbhYAnVBZ8YGqtHKyNdWV3%2FXb4Y3MRySwA7cUh9FzhhVeAUhW6x1Q3qjXc4GKVflRGMzah4eu1366ZwAqpvF5%2Bk30Cw%2BBdtR0B%2BRvm7YT6OBUn7tNJ8%2BD75fSapobqwQGwqXQbFDJKd896WKUQOdR6fxAU6s2zMuu%2Bv%2B6xv5KfmK7YNemKht1iUYyqhzyizSjlm7VW1AgDHysOFn%2FjlxWVzAkg%3D%3D"/>
                        <h3 class="event_intro" id="intro">小班制體驗</h3>
                        <p class="event_intro_content" id="event">每一堂課程皆有活動人數限定,讓您的品茶能夠有最佳品質體驗與感受! 每個人也都配有專屬的一套茶具,防疫期間可安心使用!趕快來報名體驗吧!!</p>
                    </div>
                    <div class="col-md-4 event_intro" id="event">
                    <img class="tradition" id="logo_event_intro" src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612842550240.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qQ8Y1MqcjB12%2FOKvhZmYZqSW5823utrh4Utxtz693rJYNuvFnlx4ywOFRFlBuMdwiDVm%2FC0zLpkkvn%2F0c9lpfPPk%2B2U7y0mIW0U%2BuZl6zhSTBiTFUqQzX51xuuSHnxXtH%2FZ3bxCsz2cXjleCjz7ou4Go5xn4b1UHVvn6b3QFzSbsdIqgMdEHCfR%2BaXq6c7WTH7l6yNavsiZgwgf7i9yDeFOMWgrhQQTnhjqJ9sWscwBD6m7Wl9unIgUJRb%2BehuqYlw7SIS84oIEe%2BV0hfQpb%2F3vAkjOGPz3L%2F1MZ3jV5B0rrh0FxYi5Sx3pua1iwn%2FDzNkd2F1tb5SxqHTsXB5SzzQ%3D%3D"/>
                        <h3 class="event_intro" id="intro">傳統正宗</h3>
                        <p class="event_intro_content" id="event">茶道老師均為日本傳統茶道裹千家流派的正宗弟子, 讓您體驗到最正宗的日本茶道精神! 只要跟著老師的腳步, 您就能一步步體會到日本茶道之妙!!</p>
                    </div>
                    <div class="col-md-4 event_intro" id="event">
                    <img class="season" id="logo_event_intro" src="https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612842582701.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fNCrgCuVeCMSJvZpWGy%2FZ84fwkb0p5jXouKHteZpGVwVLz4l9L09U6SrX1nOPR8A4%2BNn5VOZlx6AxAjITKxvgrXGJbyucsuepQsy2YhllOrqU77B%2Fz2%2Bp6W5UiaSAdJfaFfaQuVnbaSq7GJ0V3R6oJRs1d0xSGzyJ1qDWEGK8YKg%2FlXzqQiuqQy9UYrXmlsgb9G1jPK%2F7qrXZ6ifjlfWJRFwl6skxFTHP3WTj7K8JaJZjP%2FnHuAp15m8GHNslw7kEATIdGkcev7%2FO%2BUx6hlaVKV0Zw15GbP4Sw5VQo23BvTISgWMG%2BGB1%2BTRGum%2Fy1L3qqx%2FjufldBXLBljOEdb0VA%3D%3D"/>
                        <h3 class="event_intro" id="intro">最佳時節</h3>
                        <p class="event_intro_content" id="event">茶道在不同時節都有些微差異的流程, 但在櫻花時節絕對是體驗茶道的最佳季節!!在這櫻雪紛飛的盛放中, 一邊品茶一邊賞櫻, 何不樂哉!!</p>
                    </div>
                </div>
                <div class="col-md-12" id="register_bottom"> 
                    <router-link to="/home" tag="div">
                    <button class="btn-outline-light register_bottom">馬上報名</button>
                    </router-link>
                </div>
                
                
            </div>
            </section>
            

    </div>
</template>


<script>
    
    export default {
        data() {
            return{
                isLoading: false,
            }
        },
        mounted() {
            
            var video = document.getElementById("myEvent");
            var video_02 = document.getElementById("myVideo");
            
            
            },
            
        };

</script>

<style>
    * {
        font-family: 'Noto Serif JP','Noto Serif TC';
    }

    html.skrollr.skrollr-desktop {
        max-width: 1520px;
        overflow-x: hidden;
    }
    header#event_page  {
    min-height: 950px;
    max-width: 1520px;
    overflow-x: hidden;
    }
    .container-fluid#event_page_container {
        max-width: 1520px;
        overflow-x: hidden;
    }
    header#event_page .container-fluid {
        margin: 0px;
        padding: 0px;
        color: rgba(255, 255, 255, 0.5);
        min-height: 900px;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(5, 1fr);
        grid-template-areas: "a a c f f" "a a d g g" "b b e g g";
    }
    header#event_page .container-fluid .event_sakura.a {
        grid-area: a;
        background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url("https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612843073163.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JvAZ7ZhBdvjEVMjlMINJolNol%2FQbKQimWQYeHbAf%2FHS%2FZEo6MieGdVC08idaY0fJAe7PN%2FH6KPaa1mL9V9smzW9PbzFWxQFd8qkJNyiLrCAzeA6j3ISwEYZ97d%2F7ajeDmNVxw%2FtlcQnhbTSMWQoJmypmRP3UQDyOv9LfjcjosW%2BcW5ptCrhknjC3TtUxP0ROPbPIZnc3ubLlCG%2F4ERfE%2BwWQVE9x7Wk0SF3vhgMhcDSYB0MPYdWUOGBkr5eu9hPGHHMlGQ6XAM7BLpQh8xVpPHU%2FwT7%2BRPazh3IaNqAVS0a2%2Fhpe8B79Ybyd8QV6V8%2BGbK5BMmXT%2B66kmELiuz6Mgw%3D%3D");
        background-size: auto 105%;
        transition-duration: 2s;
    }
    header#event_page .container-fluid .event_sakura.a:hover {
        background-size: auto 115%;
        filter: brightness(1.3);
    }
    header#event_page .container-fluid .event_sakura.a .event_title_sakura {
        font-size: 72px;
        line-height: 100px;
        color: white;
        text-shadow: 5px 5px 20px black;
    }
    header#event_page .container-fluid .event_sakura.a .logo {
        padding: 50px;
        margin-bottom: 30px;
        width: 50px;
        background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612840382241.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=c%2BlAQl3dqRnocrGNq1L32USbEIDp6VODAuU7qyJihJAcMNxOK9a%2FInPPxFxsQdJnHoKWqKMkJyv3edTW%2Fcy342%2BZo5z%2FAFb2AYFwh7wp4ZuNdzqkahUGrIWgY3d699MKfPcX9qcRxLtO63BcDDgKNxIfIF3DyFDTUk982tlJk%2F8WyrKfyl3zDJ1FSJS3dPzxRqe02pgK2sbbOErbNck9eGy0ssqQTINQJNZZS8kRUAUOu%2BQ1nti0N0BmMw9TvD4bZaXh9Kt3PLVPV0utDG38z8HjRM%2FJfGdgiZb4k64VpkG6D%2FNRIu8lImxVyiKAwv6DL4F1KBMS14XvJk8GTYgYSA%3D%3D");
        background-size: cover;
        cursor: pointer;
    }
    header#event_page .container-fluid .event_time.b {
        grid-area: b;
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url("https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612843317836.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eA1%2FuYrUd0IADLo5t%2FYJ8x3Zm0vQ9Qp5gAQ6SLhItAB9KKgwUuOsf13mEbEYPAFKwqK2TcVbZA%2FU1TSoytr6VI8wT2pEVuT936Hq9YeT8TPPUreG1azOrcjFNeTGXbXfFt2yX5fPrkPIdrb7mDMUYkQjQ28%2B%2FRlA%2BMSy%2BBP71uSonUj8w9VpHCKZZ335VQLWHgOVB3a4HtMN%2FVXuVE%2FTTsqV1uWcNmhs99HHgQsXiOKYVBMhGdLv3h7pD%2BNkc4rPm%2FFWsU8MB16iFZ4N9keiMYi%2Bz%2FIhULwrG4jTr9S0wDVRB%2FOvyGJUap3tDv%2BiDbgg25tGFIwaFdTIJ2MgywGucQ%3D%3D");
        background-size: auto 101%;
        transition-duration: 2s;
    }
    header#event_page .container-fluid .event_time.b:hover {
        background-size: auto 115%;
        filter: brightness(1.2);
    }
    header#event_page .container-fluid .event_time.b:hover h3#event {
        text-shadow: 3px 3px 11px black;
        color: white;
    }
    header#event_page .container-fluid .event_time.b:hover p#event {
        opacity: 1;
        text-shadow: 3px 3px 11px black;
        color: white;
    }
    header#event_page .container-fluid .event_time.b:hover i#event {
        opacity: 1;
        text-shadow: 5px 5px 11px black;
        color: white;
    }
    header#event_page .container-fluid .event_time.b .time {
        padding-bottom: 10px;
    }
    header#event_page .container-fluid .event_time.b .time_text, header#event_page .container-fluid .event_time.b i#event {
        display: inline-block;
    }
    header#event_page .container-fluid .event_top.c {
    grid-area: c;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url("https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612843195672.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MTpSkMNPdx6qzBqoFzFZdIyHqjEYVjodwrh1VEdHrhOAWbDyH%2FtEs0%2BFzfau027vjN8H9y3TENtCHAbDg6JuLCc5nf6TWYmS%2FRDmmupkS6YPYhGUrbAeRl0E5cOe7ZDX8%2B98PcTX6rK5TTN6%2FA%2Bdwckp7UiT5GcfRUo%2Fmt%2BPBqXGIq9Id3h0Ln9ysAzmdhPwXGj9bSUajJnFK3pIIj182F51MpdSMKD6vqLQSDvJ9FY52FQxFEQG8ObSJQGqioLNqhckYeGICGe4kitNoynIAP3vMzM2VCxTGKQ0luWlJ0KfkGjqhEZ7G2ibfZLWF0X6GbCbw3easIVPyiC1LZY5Tw%3D%3D");
    background-size: auto 105%;
    transition-duration: 2s;
    }
    header#event_page .container-fluid .event_top.c:hover {
    background-size: auto 115%;
    filter: brightness(1.3);
    }
    header#event_page .container-fluid .event_top.c:hover h3#event {
    text-shadow: 3px 3px 11px black;
    color: white;
    }
    header#event_page .container-fluid .event_top.c:hover p#event {
    opacity: 1;
    text-shadow: 3px 3px 11px black;
    color: white;
    }
    header#event_page .container-fluid .event_middle.d {
    grid-area: d;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url("https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612843397035.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nkI7Gx%2FM4ynzjXvxetsyGu9EjrqsgXeGcmbfzQLIjaoSikc6GOgdJS%2Bmai9sVyMaiHPLQvNWElsIFDGnzDjZjM5sqmnYN5Hqcf8jWAFNcnJUFUqIYQHYpqpaYTbhM23mB9jYN2n1MYNHohVBxx%2FZdEaj1OuqZFBvhKzrBBvJSqVLsEEKWF2IhpLB8BA5ZUjik%2BAJsp2TdiztfY9lgEzh9LOH4JFLZBWShqYwo438mY8gLmVMmEMywmnICLp1HVnzVPxGNYbipe1OAINoL9j0R%2B%2FjbmmbLoIYKmrD8bYpTji6lQV4nJJfYQnsqun9343f42hWD5utiK%2FES6P6N%2FN3KA%3D%3D");
    background-size: auto 105%;
    transition-duration: 2s;
    }
    header#event_page .container-fluid .event_middle.d:hover {
    background-size: auto 115%;
    filter: brightness(1.3);
    }
    header#event_page .container-fluid .event_middle.d:hover h3#event {
    text-shadow: 3px 3px 11px black;
    color: white;
    }
    header#event_page .container-fluid .event_middle.d:hover p#event {
    opacity: 1;
    text-shadow: 3px 3px 11px black;
    color: white;
    }
    header#event_page .container-fluid .event_bottom.e {
    grid-area: e;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612843445453.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=D7xeOkC4%2BVIJRN0pYVyQmnTn81TIveJSyZmaHYhWBQqehwZkUlzYSfhNxgZF6GW4t4zsJ07ld7WOAA7IWiupd95b2%2BwmDF9mcIOm%2B3eUz8DYDqhN0T4dMs33bYVozWwubM9%2Fu9BEbsULBjHJ1nbPskqGNOh4m3m5umwfuN65QBZv2qd4YDgfquyD3UBffOy2SYwJY6etK1paP8FDd7YJYETm4F8kCNlEiW87KIKtjTescAQfPhOMiyFVN7nwmrA6A5oWuSja8tiYDOTDLSGnzIes3Tn8bbeO%2B8K7eS%2FK7gh%2BGBPv4GfabFhR7wOVDHCLCd2OVhO5VRtFVMiHTecDNg%3D%3D");
    background-size: auto 105%;
    transition-duration: 2s;
    }
    header#event_page .container-fluid .event_bottom.e:hover {
    background-size: auto 115%;
    filter: brightness(1.2);
    }
    header#event_page .container-fluid .event_bottom.e:hover h3#event {
    text-shadow: 3px 3px 11px black;
    color: white;
    }
    header#event_page .container-fluid .event_bottom.e:hover p#event {
    opacity: 1;
    text-shadow: 3px 3px 11px black;
    color: white;
    }
    header#event_page .container-fluid .event_rigister.f {
    grid-area: f;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url("https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612843486128.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lS8ZT1kOIXIN%2BtrZ3GK5sj3GgYD3SDVshz4cs4PJLJW%2FxKGlkZ4jModpPGSb9CJahv8lLSOxOEog1Ryx3ePz87mzMBC%2FcXrdJM%2Fg00zVRGnoRCHbyKDWjdBGxnWo4Jc5ngk5Zdn4xNDz7BAiN3s%2B4z03NwLKlKYxc8L5xkgAvNwoi8vzDWjL0W7P0eLCxRKeZv%2FiLrjXBtqECd6mAoDqxndAlYWufuxTfCsEtC%2BtZ7DjPTOg5hwLGOQBfOG7Nxq0OhGBv6Cb%2BJb7URwGLCvo%2F1bIOlBXOxUs2GMSBUJXOsj5KtC6HTeUBBRC8jpeB8QX90nWzcFm6iHjsZo8phmpGA%3D%3D");
    background-size: auto 105%;
    transition-duration: 2s;
    }
    header#event_page .container-fluid .event_rigister.f:hover {
    background-size: auto 115%;
    filter: brightness(1.4);
    }
    header#event_page .container-fluid .event_rigister.f:hover h3#event {
    text-shadow: 3px 3px 11px black;
    color: white;
    }
    header#event_page .container-fluid .event_rigister.f:hover p#event {
    opacity: 1;
    text-shadow: 3px 3px 11px black;
    color: white;
    }
    header#event_page .container-fluid .event_rigister.f:hover p#event, header#event_page .container-fluid .event_rigister.f:hover button.btn-outline-light.register {
    opacity: 1;
    color: white;
    }
    header#event_page .container-fluid .event_rigister.f button.btn-outline-light.register {
    margin-top: 18px;
    background-color: transparent;
    border: solid 2px white;
    border-radius: 30px;
    font-size: 16px;
    transition-duration: 0.5s;
    letter-spacing: 2px;
    padding: 5px 30px;
    opacity: 0;
    }
    header#event_page .container-fluid .event_rigister.f button.btn-outline-light.register:hover {
    background-color: white;
    color: gray;
    font-weight: 700;
    }
    header#event_page .container-fluid .event_record.g {
    grid-area: g;
    overflow: hidden;
    padding: 0px;
    }
    header#event_page .container-fluid .event_record.g #myEvent {
    transform: scale(6.5);
    filter: brightness(0.5);
    transition-duration: 2s;
    background: #000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    }
    .video-foreground-eventpage-top,
    .video-background-eventpage-top iframe {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    }

    
    header#event_page .container-fluid .event_record.g #myEvent:hover {
    filter: brightness(1.2);
    }
    header#event_page .container-fluid .event_record.g #myEvent:hover h3#event {
    text-shadow: 3px 3px 11px black;
    color: white;
    }
    header#event_page .container-fluid .event_record.g h3#event {
    position: relative;
    z-index: 11;
    top: 30px;
    left: 30px;
    }
    header#event_page .container-fluid .a, header#event_page .container-fluid .b, header#event_page .container-fluid .c, header#event_page .container-fluid .d, header#event_page .container-fluid .e, header#event_page .container-fluid .f, header#event_page .container-fluid .g {
    padding: 30px;
    }
    header#event_page .container-fluid .event_title {
    padding: 0px;
    padding-bottom: 22px;
    margin: 0px;
    line-height: 45px;
    }
    header#event_page .container-fluid h3#event {
    font-size: 36px;
    transition-duration: 2s;
    }
    header#event_page .container-fluid p#event {
    font-size: 16px;
    line-height: 25px;
    opacity: 0;
    transition-duration: 1s;
    }
    header#event_page .container-fluid i#event {
    opacity: 0;
    }

    .video-background-eventpage-bottom {
    background: #000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -99;
    box-sizing: border-box;
    min-height: 800px;
    }
    .video-foreground-eventpage-bottom,
    .video-background-eventpage-bottom iframe {
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    pointer-events: none;
    box-sizing: border-box;
    min-height: 850px;
    }

    @media (min-aspect-ratio: 16/9) {
    .video-foreground-eventpage-bottom {
        height: 300%;
        top: -100%;
        box-sizing: border-box;
    }
    }
    @media (max-aspect-ratio: 16/9) {
    .video-foreground-eventpage-bottom {
        width: 300%;
        left: -100%;
        box-sizing: border-box;
    }
    }
    @media all and (max-width: 600px) {
    .vid-info {
        width: 50%;
        padding: 0.5rem;
    }
    .vid-info h1 {
        margin-bottom: 0.2rem;
    }
    }
    @media all and (max-width: 500px) {
    .vid-info .acronym {
        display: none;
    }
    }

    section#event_intro {
    overflow-x: hidden;    
    max-width: 1520px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url("https://storage.googleapis.com/vue-course-api.appspot.com/ecommerce_project%2F1612843544351.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jn3W37wZFD83qWddwsdMWBAasg11e93YV8FsKUH2GmEWX4KnTXGSHKSUkNg934%2BUKR3Wp1SIOeqqKEAoXa6A1feOGRwdhAJdAaDr7wQUQ937VZrBP%2FGqybaauu0aggawDLP5%2FjeYKzmLZ6TiFWkquBkK2ww1CBcB8yCYgqIGNehz%2FqlOUttJfvqWX3K%2FHVMN%2BP6GftZCzBS%2FcDMG7t8w6j0ThQ9oc4heipOEyPHTr95RZnL6Ix7rOWEuTKcEJbEGv26SY4l7I78gLia%2FXXJ%2FLUq4tlSyO7twcTmy6u36GIdxW%2FiHyRdOu0TwR06DmYcBhF6F8Q0898qDG86ROQ8ikw%3D%3D");
    background-attachment: fixed;
    background-size: cover;
    min-height: 850px;
    margin: 0px;
    color: white;
    text-align: center;
    display: block;
    vertical-align: top;
    
    }
    section#event_intro button.btn-outline-light.register_bottom {
        background-color: transparent;
        border: solid 2px white;
        border-radius: 40px;
        font-size: 28px;
        padding: 10px 40px;
        margin-bottom: 50px;
        letter-spacing: 5px;
        transition-duration: 0.5s;
    }
    section#event_intro button.btn-outline-light.register_bottom:hover {
    background-color: white;
    color: gray;
    }
    section#event_intro .container-fluid {
    margin: 10px;
    }
    section#event_intro .container-fluid .event_intro {
    padding: 50px;
    
    }
    section#event_intro .container-fluid .event_intro h3#intro {
    padding: 0px;
    padding-bottom: 30px;
    font-size: 32px;
    }
    section#event_intro .container-fluid .event_intro p#event {
    font-size: 16px;
    line-height: 35px;
    text-align-last: left;
    padding-bottom: 60px;
    }
    section#event_intro .container-fluid .people, section#event_intro .container-fluid .tradition, section#event_intro .container-fluid .season {
    opacity: 0.8;
    transition-duration: 0.5s;
    padding-bottom: 20px;
    }
    section#event_intro .container-fluid .people:hover, section#event_intro .container-fluid .tradition:hover, section#event_intro .container-fluid .season:hover {
    opacity: 1;
    animation: rotating 2s both;
    }

    @keyframes rotating {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(10deg);
    }
    50% {
        transform: rotate(-10deg);
    }
    100% {
        transform: rotate(0deg);
    }
    }
    @media screen and (max-width: 768px) {
    header#event_page  {
    min-height: 2500px;
    }
    header#event_page .container-fluid {
        min-height: 300px;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns:50%;
        grid-template-areas: "a a""b b""c c""d e""f f""g g";
    }
    section#event_intro {
        display: none;
    }
    }
</style>